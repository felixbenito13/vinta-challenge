// Portfolio data. Evidence is only filled when it is stated on Vinta's own case pages.
// `null` evidence renders the "Outcome metrics to confirm with the client" flag (never invent results).

export const SEGMENTS = [
  'Chronic Disease', 'Weight & Metabolic', 'Maternal & Prenatal', 'Behavioral & Mental', 'Wellness & Longevity',
  'Pediatric & Family', 'Oncology', 'Dermatology', 'Care Navigation & Clinic Ops', 'Orthopedic',
] as const;
export const SOLUTIONS = ['Patient app', 'Clinical tools', 'EHR platform', 'Integrations & interoperability', 'AI agents', 'Care operations'] as const;
export const SERVICES = ['EHR Development & Modernization', 'Medplum Development', 'Healthcare Integration', 'Fast-track Builds'] as const;

export interface Case {
  slug: string; client: string; segment: string; solution: string; services: string[];
  title: string; challenge: string; evidence: string | null; image: string; url: string; internal?: boolean;
}

const V = 'https://www.vintasoftware.com/work/';

export const featured: Case = {
  slug: 'quilted-health', client: 'Quilted Health', segment: 'Maternal & Prenatal', solution: 'EHR platform',
  services: ['EHR Development & Modernization', 'Medplum Development'],
  title: 'Rebuilt a 14-year-old maternity EHR on Medplum',
  challenge: 'Legacy code and no FHIR support made every change slow and risky.',
  evidence: 'Proof of concept delivered in one month', image: 'quilted-health', url: '/work/quilted-health', internal: true,
};

export const cases: Case[] = [
  { slug: 'rewind', client: 'Rewind', segment: 'Chronic Disease', solution: 'EHR platform', services: ['Medplum Development'],
    title: 'Migrated a diabetes care EHR from Healthie to Medplum', challenge: 'An off-the-shelf EHR could not fit Rewind’s clinical workflows.',
    evidence: null, image: 'rewind', url: V + 'rewind' },
  { slug: 'everself', client: 'Everself', segment: 'Weight & Metabolic', solution: 'Clinical tools', services: ['Medplum Development'],
    title: 'Built a provider portal and communications hub for obesity care', challenge: 'Healthie could not support a more customized care model.',
    evidence: 'Calling, chat and SMS consolidated in one hub', image: 'everself', url: V + 'everself-bariendo' },
  { slug: 'brain-health-usa', client: 'Brain Health USA', segment: 'Behavioral & Mental', solution: 'EHR platform', services: ['EHR Development & Modernization'],
    title: 'Turned a fragmented stack into a production-ready EHR roadmap', challenge: '200+ providers and 2,500 daily patient interactions ran on disconnected tools.',
    evidence: 'Validated EHR roadmap in a 3-week discovery', image: 'brain-health-usa', url: V + 'brain-health-usa' },
  { slug: 'perci-health', client: 'Perci Health', segment: 'Chronic Disease', solution: 'EHR platform', services: ['Medplum Development'],
    title: 'Designed a FHIR-native EHR architecture for a nuanced care model', challenge: 'The care model was rich in nuance and needed structure before any build.',
    evidence: 'Architecture designed in one month', image: 'perci-health', url: V + 'perci-health' },
  { slug: 'transfer-center', client: 'Healthcare Transfer Center', segment: 'Care Navigation & Clinic Ops', solution: 'Care operations', services: ['Healthcare Integration'],
    title: 'Built a real-time patient-flow dashboard on Medplum', challenge: 'Bed availability, inbound requests and patient status lived in separate places.',
    evidence: 'One operational view fed by HL7 ADT feeds', image: 'transfer-center', url: V + 'healthcare-transfer-center' },
  { slug: 'child-care', client: 'Child Care Healthtech', segment: 'Pediatric & Family', solution: 'EHR platform', services: ['EHR Development & Modernization'],
    title: 'Validated a specialty care prototype and a lean MVP scope', challenge: 'Choosing an EHR platform without losing the practitioner experience.',
    evidence: 'Validated prototype in 2 weeks', image: 'child-care', url: V + 'child-care-ehr' },
  { slug: 'medplum', client: 'Medplum', segment: 'Care Navigation & Clinic Ops', solution: 'EHR platform', services: ['Medplum Development'],
    title: 'Built reference use cases for an open-source headless EHR', challenge: 'Developers needed to see what Medplum can do in real clinical workflows.',
    evidence: null, image: 'medplum', url: V + 'medplum' },
  { slug: 'splendid-spoon', client: 'Splendid Spoon', segment: 'Wellness & Longevity', solution: 'Patient app', services: ['Fast-track Builds'],
    title: 'Built a subscription platform for healthy food delivery across the US', challenge: 'Recurring and prepaid plans needed a custom platform built from the ground up.',
    evidence: null, image: 'splendid-spoon', url: V + 'splendid-spoon' },
];

export const beyond = [
  { client: 'United Nations', type: 'AI agents', text: 'Social protection knowledge powered by an LLM', url: V + 'un-social-protection-org' },
  { client: 'Unilever', type: 'Product discovery', text: 'Factory efficiency boosted in a 2-week discovery', url: V + 'unilever-product-discovery' },
  { client: 'Alt Legal', type: 'Data engineering', text: 'Complex ETL optimized for trademark dockets', url: V + 'altlegal' },
];

export const tagIcon: Record<string, string> = { segment: 'heart', solution: 'layers', service: 'grid', workflow: 'route' };
