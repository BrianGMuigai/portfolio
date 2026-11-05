export const site = {
  name: "Brian Muigai",
  url: "https://brianmuigai.vercel.app",
  email: "brianmuigai40@gmail.com",
  location: "Nairobi, Kenya",
  github: "https://github.com/BrianGMuigai",
  linkedin: "https://www.linkedin.com/in/brian-muigai/",
  description:
    "Backend engineer in Nairobi building reliable services and relational data layers with Java, Spring Boot, PostgreSQL and SQL Server.",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  greeting: "Hi, I'm Brian Muigai.",
  headline: "Backend engineer building reliable services and the data models behind them.",
  intro:
    "I design and ship Spring Boot services on PostgreSQL and SQL Server, with a focus on data integrity, concurrency and schemas that are safe to evolve. Java is my primary language; I also work in Python and C#.",
};

export const about = {
  paragraphs: [
    "I'm a backend engineer who owns the parts of a system that have to be right: the data model, the transaction boundaries, and the contracts between services.",
    "My primary stack is Java and Spring Boot on PostgreSQL and SQL Server, with Python or C# when the team calls for it. I read the query execution plan before I reach for a cache.",
  ],
  principles: [
    {
      lead: "Let the database enforce the rules.",
      body: "Strict constraints and foreign keys protect the data from every caller.",
    },
    {
      lead: "Use the lightest concurrency control that is correct.",
      body: "Optimistic versioning where conflicts are rare; explicit row locking where they aren't.",
    },
    {
      lead: "Measure before optimising.",
      body: "Start from the execution plan and the access pattern, then refine the query or index.",
    },
    {
      lead: "Make every change safe to ship and to undo.",
      body: "Versioned migrations and small, isolated changes.",
    },
  ],
};

export const skills = [
  { group: "Languages", items: ["Java (primary)", "Python", "C#", "SQL"] },
  { group: "Frameworks", items: ["Spring Boot", "FastAPI", "Flask",".NET "] },
  { group: "Data", items: ["PostgreSQL", "SQL Server", "MySQL", "Flyway", "Redis", "Kafka"] },
  { group: "Delivery", items: ["Docker", "Git", "GitHub Actions", "Maven", "Postman", "Linux"] },
];

export const experience = {
  title: "Software Engineering Attaché, Research and Development",
  company: "Attain Enterprise Solution Ltd",
  place: "Nairobi, Kenya",
  period: "Current",
  summary:
    "I work on the R&D team, building core backend service logic in Java and driving improvements to performance, concurrency and reliability across our PostgreSQL and SQL Server data layers.",
  work: [
    {
      lead: "Service layer and business logic",
      body: "Build backend service logic in Java with explicit transaction boundaries, so multi-step operations commit fully or roll back cleanly without leaving partial state.",
    },
    {
      lead: "API contracts and edge validation",
      body: "Validate input at the service boundary and return predictable error payloads, so callers get consistent behaviour and bad data is rejected before it reaches the database.",
    },
    {
      lead: "Cross-database portability",
      body: "Ported enterprise schemas and constraints between PostgreSQL and SQL Server, resolving dialect differences in data types, constraint behaviour and SQL syntax so the system runs on both engines.",
    },
    {
      lead: "Versioned schema migrations",
      body: "Introduced repeatable, version-controlled schema migrations with Flyway, giving every environment a reproducible database state and putting structural changes through code review.",
    },
    {
      lead: "Concurrency on critical writes",
      body: "Isolated and resolved race conditions on critical write paths using explicit row-level locking and tuned transaction isolation levels, matching the control to how often conflicts occur.",
    },
    {
      lead: "Query profiling and index tuning",
      body: "Diagnosed slow queries from execution plans, then refactored multi-table joins and tuned indexes to improve read performance through better data access.",
    },
  ],
};

export const contact = {
  statement:
    "I'm open to backend roles where I can own services end to end, from data model to production. If you're hiring, or want to talk system design or data modelling, send me a message.",
};

/** Shown as the "API response" card in the hero. */
export const profile = {
  role: "Backend Engineer",
  location: "Nairobi, KE",
  stack: ["Java", "Spring Boot", "PostgreSQL", "SQL Server"],
  focus: ["data modelling", "transactions", "migrations"],
  status: "open to backend roles",
};

/** The engineering concerns I own, shown as a strip under the hero. */
export const stats = [
  { value: "Data integrity", label: "Constraints, lookup states and audit trails that reject bad data." },
  { value: "Concurrency", label: "Explicit locking and tuned isolation on critical write paths." },
  { value: "Schema evolution", label: "Versioned Flyway migrations across PostgreSQL and SQL Server." },
  { value: "Query performance", label: "Execution-plan-driven join refactors and index tuning." },
];
