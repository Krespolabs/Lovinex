import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Globe, MessageCircle, CreditCard, Smartphone, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/diverse-happy-singles-connecting-digitally--warm-r.jpg"
            alt="Happy diverse singles connecting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Lovinex – Connect, Chat, and Find Love Worldwide
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty">
            Meet like-minded singles across the globe, safely and effortlessly.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 rounded-full">
            Join Now – It's Free
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">What is Lovinex?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Lovinex is a secure and innovative dating platform connecting singles internationally. Whether seeking
                friendship, romance, or meaningful relationships, Lovinex brings people together across cultures in a
                safe and intuitive environment.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img src="/global-map-with-people-connected-by-digital-hearts.jpg" alt="Global connections" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Why Choose Lovinex?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Global Connections</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Meet singles from multiple countries with verified profiles.
                </p>
                <div className="mt-6 relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="/international-people-connecting-online--diverse-fa.jpg"
                    alt="Global connections"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Secure Messaging</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chat safely with real-time messages, photos, and videos.
                </p>
                <div className="mt-6 relative h-48 rounded-lg overflow-hidden">
                  <img src="/secure-chat-interface--messaging-app--safe-communi.jpg" alt="Secure messaging" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Verified Profiles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  OTP verification and anti-fraud system for user safety.
                </p>
                <div className="mt-6 relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="/verified-profile-badge--security-shield--trust-and.jpg"
                    alt="Verified profiles"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Flexible Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access from trusted countries, restricted from high-risk regions.
                </p>
                <div className="mt-6 relative h-48 rounded-lg overflow-hidden">
                  <img src="/world-map-with-highlighted-regions--global-access-.jpg" alt="Flexible access" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Multiple Payment Options</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium subscriptions via PayPal, Card, BTC, and Bank Transfer.
                </p>
                <div className="mt-6 relative h-48 rounded-lg overflow-hidden">
                  <img src="/payment-methods-icons--credit-cards--paypal--bitco.jpg" alt="Payment options" className="w-full h-full object-cover" />
                </div>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">User-Friendly Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Intuitive interface, mobile-friendly, and responsive.
                </p>
                <div className="mt-6 relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="/modern-mobile-app-interface--clean-design--user-fr.jpg"
                    alt="User-friendly design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Feature 7 */}
            <Card className="border-2 hover:border-primary transition-colors md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Exclusive Features</h3>
                <p className="text-muted-foreground leading-relaxed">Swipe, match, and personalized recommendations.</p>
                <div className="mt-6 relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="/dating-app-swipe-feature--match-notification--pers.jpg"
                    alt="Exclusive features"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Real Connections, Real Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img src="/happy-couple-smiling-together--diverse-internation.jpg" alt="Success story" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "I met my soulmate on Lovinex! We're from different countries but found each other through this
                  amazing platform. Thank you for bringing us together!"
                </p>
                <p className="font-semibold">— Sarah & Miguel</p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img src="/happy-single-person-smiling-with-phone--confident-.jpg" alt="Success story" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "The verification system made me feel safe. I've made genuine connections and even found someone
                  special. Highly recommend!"
                </p>
                <p className="font-semibold">— James</p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img src="/happy-couple-on-video-call--long-distance-relation.jpg" alt="Success story" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Lovinex helped me connect with amazing people worldwide. The interface is so easy to use, and I love
                  the personalized matches!"
                </p>
                <p className="font-semibold">— Priya & Alex</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/happy-people-connecting-digitally--warm-romantic-a.jpg" alt="Start your journey" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">Start Your Journey Today</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            Sign up for free and experience international connections with Lovinex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
              Sign Up Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full bg-white/10 text-white border-white hover:bg-white hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Lovinex</h3>
              <p className="text-background/70">Connect, Chat, and Find Love Worldwide</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-background/70 hover:text-background">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-background/70 hover:text-background">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#stories" className="text-background/70 hover:text-background">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-background/70 hover:text-background">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#privacy" className="text-background/70 hover:text-background">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-background/70 hover:text-background">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-background/70 mb-4">support@lovinex.com</p>
              <div className="flex gap-4">
                <Link href="#" className="text-background/70 hover:text-background">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-background/70 hover:text-background">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-background/70 hover:text-background">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
                <Link href="#" className="text-background/70 hover:text-background">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2025 Lovinex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
