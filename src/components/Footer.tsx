import { ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="text-center md:text-left">
            <p className="font-medium text-foreground mb-1">Center on Rural Innovation</p>
            <p>© {currentYear} All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-2">
            <a 
              href="https://www.ruralinnovation.us/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-primary transition-colors"
              aria-label="Visit Center on Rural Innovation website"
            >
              ruralinnovation.us
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
