import * as React from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import Switch from "./switch";
import { Textarea } from "./textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import {
  Facebook,
  Instagram,
  Linkedin,
  Moon,
  Send,
  Sun,
  Twitter,
} from "lucide-react";
import { Link } from "react-router";
import { useEcommerceContext } from "../../Context/EcommerceContext";

function Footerdemo() {
  const { setIsDarkMode, isDarkMode } = useEcommerceContext();

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Exclusive Products
            </h2>
            <p className="mb-6 text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                height="10"
                width="full"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105">
                <Send className="h-5 w-5 absolute top-2 left-1" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-3 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link
                to="/"
                className="block transition-colors hover:text-primary">
                Home
              </Link>
              <Link
                to="/about"
                className="block transition-colors hover:text-primary">
                About Us
              </Link>
              <Link
                to="/shop"
                className="block transition-colors hover:text-primary">
                Shop
              </Link>
              <Link
                to="/shop"
                className="block transition-colors hover:text-primary">
                Products
              </Link>
              <Link
                to="#"
                className="block transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Shakoya, Keshorhat, Mohonpur, Rajshahi</p>
              <p>Rajshahi City, RC 12345</p>
              <p>Phone: (+880) 1311078039</p>
              <p>Email: mdnaeemuddin14@gmail.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.facebook.com/Naeem.uddin.128">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full">
                        <Facebook className="h-6 w-6 hover:text-violet-500 cursor-pointer" />
                        <span className="sr-only ">Facebook</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://x.com/home">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full">
                        <Twitter className="h-6 w-6 hover:text-violet-500 cursor-pointer" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full">
                      <Instagram className="h-6 w-6 hover:text-violet-500 cursor-pointer" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.linkedin.com/in/md-naeem-uddin-9084b6297/">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full">
                        <Linkedin className="h-6 w-6 hover:text-violet-500 cursor-pointer" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {/* <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                checked={isDarkMode}
                onCheckedChange={() => setIsDarkMode(prev => !prev)}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div> */}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Company. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
