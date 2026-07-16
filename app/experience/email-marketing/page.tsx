import { ExperienceCasePage, experienceMetadata } from "@/components/ExperienceCasePage";
import { getExperienceArea } from "@/data/arredo";

const area = getExperienceArea("email-marketing")!;
export const metadata = experienceMetadata(area);
export default function Page() { return <ExperienceCasePage area={area} />; }
