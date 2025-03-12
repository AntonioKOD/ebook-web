import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, CheckCircle, Users, BookOpen, Star, BarChart } from "lucide-react"
import { ColorfulBadge } from "@/components/colorful-badge"
import { Logo } from "@/components/logo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link
                href="#features"
                className="hidden sm:inline-flex px-3 py-2 text-sm font-medium rounded-md hover:bg-muted hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="hidden sm:inline-flex px-3 py-2 text-sm font-medium rounded-md hover:bg-muted hover:text-primary"
              >
                Testimonials
              </Link>
              <Link
                href="#author"
                className="hidden sm:inline-flex px-3 py-2 text-sm font-medium rounded-md hover:bg-muted hover:text-primary"
              >
                Author
              </Link>
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                Buy Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background via-muted to-background">
        <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ColorfulBadge className="w-fit">New Release</ColorfulBadge>
            <h1 className="text-3xl font-gristela font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary">
              Master Business Analysis
            </h1>
            <p className="max-w-[600px] text-secondary md:text-xl">
              Transform your analytical skills and boost your career with our comprehensive guide to modern business
              analysis techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="px-8 bg-accent hover:bg-accent/90">
                Buy Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-secondary">From 200+ satisfied readers</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[500px] lg:w-[450px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg transform rotate-1"></div>
              <Image
                src="/placeholder.svg?height=600&width=450"
                alt="Business Analysis ebook cover"
                width={450}
                height={600}
                className="rounded-lg object-cover shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-gristela font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                What&apos;s Inside
              </h2>
              <p className="max-w-[900px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A comprehensive guide to mastering business analysis in the modern corporate landscape
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 items-start pt-8 md:pt-12">
            <Card className="shadow-sm border-neutral hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-primary font-gristela">Data-Driven Decision Making</CardTitle>
                <CardDescription className="text-secondary">Chapter 1-3</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Learn how to gather, analyze, and interpret business data to make informed strategic decisions.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-accent hover:text-accent hover:bg-accent/10">
                  Preview Chapter 1
                </Button>
              </CardFooter>
            </Card>
            <Card className="shadow-sm border-neutral hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-primary font-gristela">Stakeholder Management</CardTitle>
                <CardDescription className="text-secondary">Chapter 4-6</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Master the art of identifying key stakeholders and managing their expectations effectively.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-accent hover:text-accent hover:bg-accent/10">
                  Preview Chapter 4
                </Button>
              </CardFooter>
            </Card>
            <Card className="shadow-sm border-neutral hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-primary font-gristela">Process Optimization</CardTitle>
                <CardDescription className="text-secondary">Chapter 7-9</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Discover proven methodologies to identify inefficiencies and optimize business processes.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-accent hover:text-accent hover:bg-accent/10">
                  Preview Chapter 7
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-gristela font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Key Benefits
              </h2>
              <p className="max-w-[900px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Why this ebook will transform your approach to business analysis
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 border border-neutral rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-all hover:border-accent">
              <CheckCircle className="h-12 w-12 text-accent" />
              <h3 className="text-xl font-gristela font-bold text-primary">Practical Frameworks</h3>
              <p className="text-center text-secondary">
                Ready-to-use frameworks that you can immediately apply to your projects.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-neutral rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-all hover:border-accent">
              <Users className="h-12 w-12 text-accent" />
              <h3 className="text-xl font-gristela font-bold text-primary">Real Case Studies</h3>
              <p className="text-center text-secondary">
                Learn from real-world examples across various industries and scenarios.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-neutral rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-all hover:border-accent">
              <BookOpen className="h-12 w-12 text-accent" />
              <h3 className="text-xl font-gristela font-bold text-primary">Actionable Templates</h3>
              <p className="text-center text-secondary">
                Access to downloadable templates to streamline your analysis process.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-neutral rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-all hover:border-accent">
              <BarChart className="h-12 w-12 text-accent" />
              <h3 className="text-xl font-gristela font-bold text-primary">Data Visualization</h3>
              <p className="text-center text-secondary">
                Master techniques to present complex data in clear, compelling visuals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-neutral rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-all hover:border-accent">
              <CheckCircle className="h-12 w-12 text-accent" />
              <h3 className="text-xl font-gristela font-bold text-primary">Certification Prep</h3>
              <p className="text-center text-secondary">
                Materials aligned with industry certification requirements to boost your credentials.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-neutral rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition-all hover:border-accent">
              <Users className="h-12 w-12 text-accent" />
              <h3 className="text-xl font-gristela font-bold text-primary">Career Advancement</h3>
              <p className="text-center text-secondary">
                Strategic guidance on leveraging your analysis skills for career growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-gristela font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Reader Testimonials
              </h2>
              <p className="max-w-[900px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here&apos;s what business professionals are saying about our ebook
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="bg-muted/50 shadow-sm border-neutral hover:border-accent transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Sarah Johnson"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg text-primary font-gristela">Sarah Johnson</CardTitle>
                    <CardDescription className="text-secondary">Senior Business Analyst, Acme Corp</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-secondary">
                  &quot;This ebook completely transformed how I approach stakeholder requirements. The frameworks are
                  practical and easy to implement.&quot;
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardFooter>
            </Card>
            <Card className="bg-muted/50 shadow-sm border-neutral hover:border-accent transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Michael Chen"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg text-primary font-gristela">Michael Chen</CardTitle>
                    <CardDescription className="text-secondary">Product Manager, Tech Innovations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-secondary">
                  &quot;I&apos;ve read dozens of business books, but this one stands out for its actionable advice and clear
                  examples. Worth every penny.&quot;
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardFooter>
            </Card>
            <Card className="bg-muted/50 shadow-sm border-neutral hover:border-accent transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Amanda Rodriguez"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg text-primary font-gristela">Amanda Rodriguez</CardTitle>
                    <CardDescription className="text-secondary">MBA Student, Business School</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-secondary">
                  &quot;As a student preparing to enter the business world, this ebook gave me practical skills that my
                  courses didn&apos;t cover. Highly recommend!&quot;
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=320"
                  alt="Author"
                  width={320}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-gristela font-bold tracking-tighter sm:text-4xl text-primary">
                Meet the Author
              </h2>
              <p className="text-secondary">
                Dr. Alex Morgan is a renowned business analyst with over 15 years of experience working with Fortune 500
                companies. He has helped businesses across various industries optimize their processes and increase
                profitability.
              </p>
              <p className="text-secondary">
                With a Ph.D. in Business Administration and certifications in Six Sigma and IIBA, Dr. Morgan combines
                academic knowledge with practical experience to deliver actionable insights.
              </p>
              <p className="text-secondary">
                As a frequent speaker at industry conferences and a contributor to leading business publications, Dr.
                Morgan is committed to helping professionals master the art and science of business analysis.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  More About the Author
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-gristela font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about our business analysis ebook
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 mt-8">
            <Card className="shadow-sm border-neutral hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-primary font-gristela">What format is the ebook available in?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  The ebook is available in PDF, EPUB, and MOBI formats, making it compatible with all major e-readers,
                  tablets, smartphones, and computers.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm border-neutral hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-primary font-gristela">Is this ebook suitable for beginners?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  While the ebook covers advanced concepts, it starts with fundamentals and gradually builds up, making
                  it perfect for both beginners and experienced analysts.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm border-neutral hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-primary font-gristela">
                  Are there any bonuses included with the purchase?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  Yes! Your purchase includes access to downloadable templates, a community forum, and a 30-minute free
                  consultation with a certified business analyst.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm border-neutral hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-primary font-gristela">Can I get a refund if I&apos;m not satisfied?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary">
                  We offer a 30-day money-back guarantee. If you&apos;re not completely satisfied with the ebook, simply
                  email us for a full refund.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-gristela font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Business Analysis Skills?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                Join over 10,000 professionals who have enhanced their career with our comprehensive guide
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="px-8 bg-accent hover:bg-accent/90">
                Buy Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
              >
                Download Sample
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-90">Secure payment via Stripe. Instant download after purchase.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-background border-t border-neutral">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm text-secondary hover:text-primary hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-secondary hover:text-primary hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-secondary hover:text-primary hover:underline underline-offset-4">
              Contact Us
            </Link>
          </nav>
          <p className="text-xs text-secondary">© 2025 BusinessInsights. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

