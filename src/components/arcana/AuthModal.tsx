import { Link } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GoldButton } from "./GoldButton";
import { Mail, User } from "lucide-react";

type Props = { open: boolean; onOpenChange: (o: boolean) => void };

export function AuthModal({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass border-0 sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="font-display text-2xl">
            Enter <span className="gold-text">Arcana</span>
          </DialogTitle>
          <DialogDescription>
            Sign in to save your readings and journal.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 space-y-3">
          <GoldButton variant="secondary" className="w-full" onClick={() => onOpenChange(false)}>
            <GoogleGlyph /> Continue with Google
          </GoldButton>

          <div className="flex items-center gap-3 py-1">
            <Separator className="flex-1 bg-white/10" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">or</span>
            <Separator className="flex-1 bg-white/10" />
          </div>

          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); onOpenChange(false); }}>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@arcana.ai" className="pl-9 bg-white/5 border-white/10" />
              </div>
            </div>
            <GoldButton type="submit" className="w-full">Continue with Email</GoldButton>
          </form>

          <div className="pt-1">
            <Link to="/dashboard" onClick={() => onOpenChange(false)}>
              <GoldButton variant="ghost" className="w-full">
                <User className="h-4 w-4" /> Continue as guest
              </GoldButton>
            </Link>
          </div>

          <p className="text-center text-[11px] text-muted-foreground">
            By continuing you agree to the Terms and Privacy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function GoogleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.2s2.7-6.2 6-6.2c1.9 0 3.1.8 3.9 1.5l2.6-2.5C16.9 3.3 14.7 2.3 12 2.3 6.9 2.3 2.8 6.4 2.8 12S6.9 21.7 12 21.7c6.9 0 9.2-4.9 9.2-7.4 0-.5 0-.9-.1-1.3H12z"/>
    </svg>
  );
}
