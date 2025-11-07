import { Share2, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export function SocialShare() {
  const { toast } = useToast();
  const url = typeof window !== 'undefined' ? window.location.href : 'https://www.ruralinnovation.us/';
  const title = "Cross-Community Tech Talent Synthesis Report";
  const description = "Interactive insights from six rural communities building tech talent pipelines";

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  const shareViaEmail = () => {
    const emailSubject = encodeURIComponent(title);
    const emailBody = encodeURIComponent(`${description}\n\n${url}`);
    window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Link copied!",
      description: "Report URL copied to clipboard",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2"
          aria-label="Share this report"
        >
          <Share2 className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={shareOnLinkedIn} className="cursor-pointer">
          <Linkedin className="w-4 h-4 mr-2" aria-hidden="true" />
          Share on LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareOnTwitter} className="cursor-pointer">
          <Twitter className="w-4 h-4 mr-2" aria-hidden="true" />
          Share on Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareViaEmail} className="cursor-pointer">
          <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
          Share via Email
        </DropdownMenuItem>
        <DropdownMenuItem onClick={copyLink} className="cursor-pointer">
          <Share2 className="w-4 h-4 mr-2" aria-hidden="true" />
          Copy Link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
