"use client";

import { useState, useMemo } from "react";
import {
  LOCATIONS,
  PRACTICE_PHONE_RICHMOND_DISPLAY,
  PRACTICE_PHONE_MIDLOTHIAN_DISPLAY,
} from "@/lib/constants";

type Step = "location" | "date" | "time" | "info" | "confirm" | "success";

const VISIT_TYPES = [
  "New Patient Consultation",
  "Dental Implant Consultation",
  "Periodontal Evaluation",
  "Gum Grafting Consultation",
  "Second Opinion",
  "Other",
];

// Richmond: Mon-Thu 8-5, Fri 8-1
// Midlothian: Mon-Wed 8-5, Thu-Fri 7-2
function getTimeSlots(locationId: string, dayOfWeek: number): string[] {
  const slots: string[] = [];

  if (locationId === "richmond") {
    if (dayOfWeek >= 1 && dayOfWeek <= 4) {
      // Mon-Thu
      for (let h = 8; h <= 16; h++) {
        if (h === 12) continue; // lunch
        slots.push(`${h > 12 ? h - 12 : h}:00 ${h >= 12 ? "PM" : "AM"}`);
        if (h < 16) slots.push(`${h > 12 ? h - 12 : h}:30 ${h >= 12 ? "PM" : "AM"}`);
      }
    } else if (dayOfWeek === 5) {
      // Fri morning only
      for (let h = 8; h <= 12; h++) {
        slots.push(`${h}:00 AM`);
        if (h < 12) slots.push(`${h}:30 AM`);
      }
    }
  } else {
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
      // Mon-Wed
      for (let h = 8; h <= 16; h++) {
        if (h === 12) continue;
        slots.push(`${h > 12 ? h - 12 : h}:00 ${h >= 12 ? "PM" : "AM"}`);
        if (h < 16) slots.push(`${h > 12 ? h - 12 : h}:30 ${h >= 12 ? "PM" : "AM"}`);
      }
    } else if (dayOfWeek === 4 || dayOfWeek === 5) {
      // Thu-Fri
      for (let h = 7; h <= 13; h++) {
        if (h === 12) continue;
        slots.push(`${h > 12 ? h - 12 : h}:00 ${h >= 12 ? "PM" : "AM"}`);
        if (h < 13) slots.push(`${h > 12 ? h - 12 : h}:30 ${h >= 12 ? "PM" : "AM"}`);
      }
    }
  }

  return slots;
}

function isAvailable(locationId: string, dayOfWeek: number): boolean {
  if (dayOfWeek === 0 || dayOfWeek === 6) return false; // weekends
  if (locationId === "richmond") return dayOfWeek >= 1 && dayOfWeek <= 5;
  return dayOfWeek >= 1 && dayOfWeek <= 5;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function AppointmentCalendar() {
  const [step, setStep] = useState<Step>("location");
  const [locationId, setLocationId] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    visitType: "",
    notes: "",
  });

  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
    const days: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);

    return days;
  }, [viewYear, viewMonth]);

  const timeSlots = useMemo(() => {
    if (!selectedDate || !locationId) return [];
    return getTimeSlots(locationId, selectedDate.getDay());
  }, [selectedDate, locationId]);

  const selectedLocation = LOCATIONS.find((l) => l.id === locationId);

  function handleSubmit() {
    setStep("success");
  }

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  }

  const isPastMonth =
    viewYear < today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth <= today.getMonth());

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress indicator */}
      {step !== "success" && (
        <div className="flex items-center justify-center gap-2 mb-10">
          {(["location", "date", "time", "info", "confirm"] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  step === s
                    ? "bg-teal scale-125"
                    : (["location", "date", "time", "info", "confirm"] as Step[]).indexOf(step) > i
                    ? "bg-teal/40"
                    : "bg-gray-light"
                }`}
              />
              {i < 4 && <div className="w-8 h-px bg-gray-light" />}
            </div>
          ))}
        </div>
      )}

      {/* Step 1: Location */}
      {step === "location" && (
        <div>
          <h2 className="heading-lg text-navy mb-2 text-center">Select a Location</h2>
          <p className="body-lg text-gray-dark/60 text-center mb-8">
            Choose which office you&apos;d like to visit.
          </p>
          <div className="grid gap-4">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                type="button"
                onClick={() => {
                  setLocationId(loc.id);
                  setStep("date");
                }}
                className={`text-left p-6 border-l-2 transition-all hover:bg-cream ${
                  locationId === loc.id
                    ? "border-teal bg-cream"
                    : "border-gray-light bg-white"
                }`}
              >
                <h3 className="heading-md text-navy">{loc.name}</h3>
                <p className="text-gray-dark/60 text-sm mt-1">
                  {loc.street}, {loc.city}, {loc.state} {loc.zip}
                </p>
                <p className="text-teal text-sm mt-1">{loc.phone}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Date */}
      {step === "date" && (
        <div>
          <h2 className="heading-lg text-navy mb-2 text-center">Select a Date</h2>
          <p className="body-lg text-gray-dark/60 text-center mb-8">
            {selectedLocation?.name}
          </p>

          {/* Calendar header */}
          <div className="flex items-center justify-between mb-6">
            <button
              type="button"
              onClick={prevMonth}
              disabled={isPastMonth}
              className="p-2 text-navy/40 hover:text-navy disabled:opacity-20 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h3 className="heading-md text-navy">
              {MONTH_NAMES[viewMonth]} {viewYear}
            </h3>
            <button
              type="button"
              onClick={nextMonth}
              className="p-2 text-navy/40 hover:text-navy transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Day names */}
          <div className="grid grid-cols-7 mb-2">
            {DAY_NAMES.map((d) => (
              <div key={d} className="text-center text-xs font-medium text-gray-dark/40 py-2">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, i) => {
              if (day === null) return <div key={`e-${i}`} />;

              const date = new Date(viewYear, viewMonth, day);
              const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
              const dayOfWeek = date.getDay();
              const available = !isPast && isAvailable(locationId, dayOfWeek);
              const isSelected =
                selectedDate?.getDate() === day &&
                selectedDate?.getMonth() === viewMonth &&
                selectedDate?.getFullYear() === viewYear;

              return (
                <button
                  key={day}
                  type="button"
                  disabled={!available}
                  onClick={() => {
                    setSelectedDate(date);
                    setSelectedTime("");
                    setStep("time");
                  }}
                  className={`aspect-square flex items-center justify-center text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-teal text-white"
                      : available
                      ? "text-navy hover:bg-teal/10"
                      : "text-gray-dark/20 cursor-not-allowed"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setStep("location")}
            className="mt-8 text-sm text-teal hover:underline"
          >
            ← Change location
          </button>
        </div>
      )}

      {/* Step 3: Time */}
      {step === "time" && (
        <div>
          <h2 className="heading-lg text-navy mb-2 text-center">Select a Time</h2>
          <p className="body-lg text-gray-dark/60 text-center mb-8">
            {selectedDate?.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => {
                  setSelectedTime(slot);
                  setStep("info");
                }}
                className={`py-3 px-2 text-sm font-medium border transition-all ${
                  selectedTime === slot
                    ? "border-teal bg-teal text-white"
                    : "border-gray-light text-navy hover:border-teal hover:bg-teal/5"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setStep("date")}
            className="mt-8 text-sm text-teal hover:underline"
          >
            ← Change date
          </button>
        </div>
      )}

      {/* Step 4: Patient Info */}
      {step === "info" && (
        <div>
          <h2 className="heading-lg text-navy mb-2 text-center">Your Information</h2>
          <p className="body-lg text-gray-dark/60 text-center mb-8">
            Please fill in your details below.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep("confirm");
            }}
            className="space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-dark/60 mb-1.5">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full border border-gray-light px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-dark/60 mb-1.5">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full border border-gray-light px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-dark/60 mb-1.5">
                Phone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border border-gray-light px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-dark/60 mb-1.5">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-light px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-dark/60 mb-1.5">
                Nature of Visit
              </label>
              <select
                value={formData.visitType}
                onChange={(e) => setFormData({ ...formData, visitType: e.target.value })}
                className="w-full border border-gray-light px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none bg-white"
              >
                <option value="">Select...</option>
                {VISIT_TYPES.map((vt) => (
                  <option key={vt} value={vt}>{vt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-dark/60 mb-1.5">
                Additional Notes
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full border border-gray-light px-4 py-3 text-sm text-navy focus:border-teal focus:outline-none resize-none"
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button type="submit" className="btn-primary flex-1">
                Review & Submit
              </button>
            </div>
          </form>

          <button
            type="button"
            onClick={() => setStep("time")}
            className="mt-6 text-sm text-teal hover:underline"
          >
            ← Change time
          </button>
        </div>
      )}

      {/* Step 5: Confirm */}
      {step === "confirm" && (
        <div>
          <h2 className="heading-lg text-navy mb-2 text-center">Confirm Your Appointment</h2>
          <p className="body-lg text-gray-dark/60 text-center mb-8">
            Please review your details below.
          </p>

          <div className="bg-cream p-6 mb-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-dark/60">Location</span>
              <span className="text-navy font-medium">{selectedLocation?.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-dark/60">Date</span>
              <span className="text-navy font-medium">
                {selectedDate?.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-dark/60">Time</span>
              <span className="text-navy font-medium">{selectedTime}</span>
            </div>
            <div className="h-px bg-navy/10 my-2" />
            <div className="flex justify-between text-sm">
              <span className="text-gray-dark/60">Name</span>
              <span className="text-navy font-medium">
                {formData.firstName} {formData.lastName}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-dark/60">Phone</span>
              <span className="text-navy font-medium">{formData.phone}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-dark/60">Email</span>
              <span className="text-navy font-medium">{formData.email}</span>
            </div>
            {formData.visitType && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-dark/60">Visit Type</span>
                <span className="text-navy font-medium">{formData.visitType}</span>
              </div>
            )}
          </div>

          <p className="text-xs text-gray-dark/50 text-center mb-6">
            Your appointment will be confirmed by phone by a member of our staff.
            Please use this form for general information purposes only. Do not send
            personal health information through this form.
          </p>

          <button
            type="button"
            onClick={handleSubmit}
            className="btn-primary w-full"
          >
            Request Appointment
          </button>

          <button
            type="button"
            onClick={() => setStep("info")}
            className="mt-6 text-sm text-teal hover:underline block mx-auto"
          >
            ← Edit information
          </button>
        </div>
      )}

      {/* Success */}
      {step === "success" && (
        <div className="text-center py-8">
          <div className="mx-auto mb-6 h-16 w-16 bg-teal/10 flex items-center justify-center">
            <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="heading-lg text-navy mb-3">Request Received</h2>
          <p className="body-lg text-gray-dark/60 max-w-md mx-auto mb-8">
            Thank you! A member of our staff will call you shortly to confirm
            your appointment at {selectedLocation?.name}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href={`tel:${LOCATIONS[0].phoneTel}`} className="text-teal hover:underline">
              Richmond {PRACTICE_PHONE_RICHMOND_DISPLAY}
            </a>
            <span className="hidden sm:inline text-gray-dark/20">|</span>
            <a href={`tel:${LOCATIONS[1].phoneTel}`} className="text-teal hover:underline">
              Midlothian {PRACTICE_PHONE_MIDLOTHIAN_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
