/**
 * Every project on the site lives in this file.
 *
 * To add one: copy an object in `projects`, change the fields, and save.
 * It will appear on the home page (if `featured`), on /projects, and get
 * its own page at /projects/<slug>. Nothing else needs to change.
 */

export interface GalleryItem {
  id: string;
  label: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  /** Optional chips listed under the image, e.g. table names. */
  items?: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** One or two sentences, shown on cards. */
  summary: string;
  status: string;
  year: string;
  /** Short labels, used for the filter on /projects. */
  tags: string[];
  featured: boolean;
  repo?: string;
  live?: string;
  /** Image shown on the card. */
  cover?: { src: string; width: number; height: number; alt: string };
  overview: string[];
  highlightsTitle: string;
  highlights: { title: string; body: string }[];
  galleryTitle?: string;
  gallery?: GalleryItem[];
  /** Shown as a note at the end of the overview. */
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    summary:
      "A Spring Boot backend that models how a hospital runs, built on a 52-table PostgreSQL schema.",
    status: "In development",
    year: "2026",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Data modeling"],
    featured: true,
    repo: "https://github.com/BrianGMuigai/Hospital-System",
    cover: {
      src: "/erd/clinical.png",
      width: 820,
      height: 520,
      alt: "Entity relationship diagram of the clinical module",
    },
    overview: [
      "A backend that models how a hospital runs: patients, appointments, admissions, pharmacy, lab, billing, insurance and staff. I'm building it to practise production-style backend work, starting from the schema.",
      "The API layer is Spring Boot REST with request validation, cursor-based pagination and centralized exception handling, on PostgreSQL with versioned Flyway migrations.",
    ],
    note: "This is a training project, not a client system, and it is still in development.",
    galleryTitle: "The schema, module by module",
    gallery: [
      {
        id: "overview",
        label: "Overview",
        src: "/erd/full.png",
        width: 2400,
        height: 1000,
        alt: "Entity relationship diagram of the whole hospital schema",
        caption:
          "The whole schema on one canvas. Open it full size to zoom, or pick a module for a readable view.",
      },
      {
        id: "clinical",
        label: "Clinical",
        src: "/erd/clinical.png",
        width: 820,
        height: 520,
        alt: "Entity relationship diagram of the clinical module",
        caption:
          "Patients, doctors and their schedules, appointments and visit notes, plus admissions into wards and beds.",
        items: [
          "Patient", "Doctor", "DoctorSchedule", "Appointment", "AppointmentStatus", "VisitNote",
          "Reminders", "ReminderType", "Admission", "Ward", "WardStatus", "Bed", "BedStatus",
        ],
      },
      {
        id: "pharmacy",
        label: "Pharmacy and lab",
        src: "/erd/pharmacy.png",
        width: 770,
        height: 360,
        alt: "Entity relationship diagram of the pharmacy and lab module",
        caption:
          "Drug catalogue and batch stock, prescriptions with their items, and lab tests moving from order to result.",
        items: [
          "Drug", "DrugStock", "Prescription", "PrescriptionItem", "PrescriptionStatus",
          "LabTest", "LabOrders", "LabResult",
        ],
      },
      {
        id: "billing",
        label: "Billing and insurance",
        src: "/erd/billing.png",
        width: 800,
        height: 395,
        alt: "Entity relationship diagram of the billing module",
        caption:
          "Invoices built from catalogued services, drugs and lab tests, with insurance claims, payments, refunds and hospital expenses.",
        items: [
          "ServiceCatalog", "Invoices", "InvoiceItem", "InsuranceProviders", "PatientInsurance",
          "InsuranceClaim", "Payments", "PaymentMethod", "Refunds", "ExpenseCategories", "Expenses", "Status",
        ],
      },
      {
        id: "access",
        label: "Access control",
        src: "/erd/access.png",
        width: 710,
        height: 425,
        alt: "Entity relationship diagram of the access control module",
        caption:
          "Staff accounts, departments, roles and permissions, and the rosters and shifts that say who works where.",
        items: [
          "Users", "Staff", "Departments", "Roles", "Permissions", "RolesPermission",
          "StaffRoles", "StaffRoster", "Shifts",
        ],
      },
      {
        id: "hr",
        label: "HR and payroll",
        src: "/erd/hr.png",
        width: 598,
        height: 470,
        alt: "Entity relationship diagram of the HR module",
        caption:
          "Attendance, leave requests against leave types, professional licences, and monthly payroll runs.",
        items: ["Attendance", "LeaveTypes", "LeaveRequest", "Licences", "PayRollRun", "PayRoll"],
      },
    ],
    highlightsTitle: "Design decisions",
    highlights: [
      {
        title: "Access control lives in data",
        body: "Roles, permissions and their links are tables, and every staff role assignment carries ValidFrom, ValidTo and AssignedBy, so access can expire and be traced to who granted it.",
      },
      {
        title: "Statuses are lookup tables",
        body: "Appointment, bed, ward and prescription states are keyed rows, not free text, so the database rejects states that don't exist.",
      },
      {
        title: "Stock is tracked by batch",
        body: "Each drug stock row holds a batch number, expiry date, quantity and received date, so expiring stock can be found and rotated.",
      },
      {
        title: "Billing traces back to its source",
        body: "An invoice item points at the service, drug or lab test it charges for, and an insurance claim points at both the invoice and the patient's policy.",
      },
      {
        title: "Changes can be audited",
        body: "An audit log records the action, table, record, old and new values, and the staff member responsible.",
      },
      {
        title: "Scheduling is guarded against double-booking",
        body: "Booking uses explicit concurrency control so two simultaneous requests can't claim the same slot.",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const featuredProjects = (limit = 4) =>
  projects.filter((p) => p.featured).slice(0, limit);

export const allTags = () => Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
