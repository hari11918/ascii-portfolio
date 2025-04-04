import { AsciiArt } from "@/components/ascii-art"
import { Award, Trophy, Flag } from "lucide-react"

export function CertificationsSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="certifications" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Award className="h-4 w-4 mr-2" />
            Certifications
          </h3>
          <ul className="space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">Microsoft Certified: Power BI Data Analyst Associate (SC-200)</p>
                <p className="text-xs text-muted-foreground">Microsoft</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <div>
                <p className="font-medium">AI For Everyone</p>
                <p className="text-xs text-muted-foreground">DeepLearning.AI (Coursera)</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

