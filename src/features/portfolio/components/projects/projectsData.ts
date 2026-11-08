export type ProjectStatus = "Complete" | "In progress";

export type Project = {
    id: string;
    name: string;
    // Where the project came from, e.g. "Personal project" or "Client project · Uptech Studio".
    // For client work this also explains why there is no source link.
    context: string;
    tagline: string;
    description: string;
    highlights: string[];
    technologies: string[];
    status?: ProjectStatus;
    featured?: boolean;
    links?: {
        github?: string;
        demo?: string;
        appStore?: string;
        googlePlay?: string;
    };
};

// Featured projects render first. Only list a project once its repo is public —
// reviewers will click through.
export const projects: Project[] = [
    {
        id: "rust-reverse-proxy",
        name: "Rust Reverse Proxy",
        context: "Personal project",
        tagline: "A reverse proxy built in Rust on raw TCP, with my own HTTP parser",
        description:
            "A reverse proxy written in Rust that takes incoming HTTP requests and forwards them to backend servers. Instead of using an HTTP library, I wrote the HTTP/1.1 parsing myself on top of Tokio TCP connections.",
        highlights: [
            "Wrote an HTTP/1.1 parser from scratch that handles requests arriving in pieces, chunked bodies, and keep-alive connections.",
            "Tested the parser with unit and fuzz tests, and return proper error responses for bad or oversized requests.",
            "Handle many connections at once with async Rust and Tokio, using timeouts and size limits.",
            "Spread traffic across multiple backend servers and skip any that stop responding.",
            "Shut down cleanly by finishing in-flight requests first.",
        ],
        technologies: ["Rust", "Tokio", "TCP", "HTTP/1.1", "Docker"],
        featured: true,
        links: {
            // github: "https://github.com/18mstalberg/<repo>",
        },
    },
    {
        id: "digital-diagnostics-monitoring",
        name: "Patient Monitor Alert Detection",
        context: "Client project · Uptech Studio",
        tagline: "Automated alert detection from healthcare monitor screens, for Digital Diagnostics",
        description:
            "A system that watches patient monitor screens and flags when one shows an alert, like heart rate or blood pressure. A desktop agent captures the screens, an AWS server detects the alerts, and a web dashboard shows them, all built for a HIPAA-regulated environment.",
        highlights: [
            "Built a Python desktop agent that automatically captures screenshots of patient monitors and sends them to an AWS server for processing.",
            "Wrote a custom image processing and detection algorithm that spots alerts in under a second.",
            "Tracked 100+ monitors in total: 10+ at each of dozens of locations.",
            "Built a Next.js dashboard hosted on AWS, with login and access control through Amazon Cognito.",
            "Worked within HIPAA requirements, using AWS services configured to protect patient health information.",
        ],
        technologies: ["Python", "Image Processing", "TypeScript", "Next.js", "AWS", "Amazon Cognito"],
        status: "Complete",
    },
    {
        id: "evmatch-ocpp",
        name: "EVMatch Charger Integration",
        context: "Client project · Uptech Studio",
        tagline: "OCPP integration for EVMatch, a smart EV charging platform for apartments, homes, and businesses",
        description:
            "EVMatch provides affordable, customer-focused EV charging. I worked on the backend that communicates with chargers over the OCPP protocol, turning charger data into the values customers see and control in the EVMatch mobile app.",
        highlights: [
            "Integrated OCPP communication into the backend so charger status and charging session data reach customer-facing features.",
            "Built backend support for customers to track, start, and stop charging sessions from the mobile app.",
            "Tested against physical chargers to make sure data and commands were sent and received correctly.",
            "Troubleshot communication issues between charging hardware and the cloud backend.",
        ],
        technologies: ["TypeScript", "OCPP", "EV Charging"],
        status: "Complete",
    },
    {
        id: "holistic-pet-hub",
        name: "Holistic Pet Hub",
        context: "Client project · Uptech Studio",
        tagline: "Full-stack mobile app I built solo, live on the App Store and Google Play",
        description:
            "A pet product scanner that scores how safe a product's ingredients are, with pet profiles and access to holistic pet coaches and vets. I built the whole thing on my own: the Flutter app, the Supabase backend, and paid subscriptions.",
        highlights: [
            "Sole developer, from the first build to release on the App Store and Google Play from a single Flutter codebase.",
            "Built barcode scanning that looks up products in a database of thousands of pet products and scores how safe their ingredients are.",
            "Built pet profiles (breed, age, health conditions) that personalize product recommendations.",
            "Built the backend on Supabase, using Postgres, auth, and edge functions for server-side logic.",
            "Integrated RevenueCat to run the Premium subscription and free trial across iOS and Android.",
        ],
        technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Edge Functions", "RevenueCat"],
        status: "Complete",
        links: {
            appStore: "https://apps.apple.com/app/id6547833947",
            googlePlay: "https://play.google.com/store/apps/details?id=com.holisticpethub.app",
        },
    },
];
