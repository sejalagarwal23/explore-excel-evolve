import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, MapPin, Target, TrendingUp, Users, CheckCircle2, Star, Shield, Award, Clock, Zap } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Homepage = () => {
  // Placeholder handlers for interactive elements
  const handleGetStarted = () => {
    // handleQuizStart() - Connect to quiz initialization
    console.log("Get Started clicked - would navigate to quiz");
  };

  const handleQuizStart = () => {
    // connectToQuizAPI() - Connect to aptitude quiz
    console.log("Quiz start - would launch aptitude assessment");
  };

  const handleLogin = () => {
    // connectToAuthSystem() - Connect to authentication
    console.log("Login clicked - would open auth modal");
  };

  const handleSignUp = () => {
    // connectToRegistration() - Connect to user registration
    console.log("Sign up clicked - would open registration form");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary rounded-lg p-2">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">CareerPath Advisor</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleLogin}>Login</Button>
              <Button variant="default" onClick={handleSignUp}>Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Personalized Path to
            <span className="block bg-gradient-to-r from-accent-light to-primary-light bg-clip-text text-transparent">
              Career Success
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Discover your potential, explore career paths, and find the perfect educational journey 
            with AI-powered guidance and government-verified college data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground shadow-large transform hover:scale-105 transition-all duration-300"
              onClick={handleGetStarted}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary shadow-medium"
              onClick={handleQuizStart}
            >
              Take Career Quiz
            </Button>
          </div>
        </div>
      </section>

      {/* Features Preview Cards */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Career Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and insights to guide every step of your educational and career journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Aptitude & Interest Quiz</CardTitle>
                <CardDescription>
                  Discover your strengths and interests with our comprehensive assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div id="quiz-entry" className="space-y-2">
                  {/* Placeholder for quiz integration */}
                  <p className="text-sm text-muted-foreground">Scientific assessment covering:</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-accent mr-2" />Analytical Skills</li>
                    <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-accent mr-2" />Creative Thinking</li>
                    <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-accent mr-2" />Career Interests</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Course-to-Career Mapping</CardTitle>
                <CardDescription>
                  Visualize how different courses lead to specific career opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2">Engineering → Tech</Badge>
                  <Badge variant="secondary" className="mr-2">Commerce → Finance</Badge>
                  <Badge variant="secondary">Arts → Creative</Badge>
                  <p className="text-sm text-muted-foreground mt-3">
                    Interactive career pathways with salary insights and job market trends
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Nearby Govt. College Directory</CardTitle>
                <CardDescription>
                  Find government colleges near you with verified data and admission details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Within 50km</span>
                    <span className="text-accent font-medium">245 colleges</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Avg. fees</span>
                    <span className="text-accent font-medium">₹15K-50K</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Timeline Tracker</CardTitle>
                <CardDescription>
                  Never miss important deadlines with personalized academic calendar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span>JEE Application: March 15</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>NEET Exam: May 5</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mr-3"></div>
                    <span>Board Results: June 30</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Personalized Dashboard</CardTitle>
                <CardDescription>
                  Your career journey at a glance with AI-powered recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="bg-accent/10 p-2 rounded text-sm">
                    <strong>Today's Focus:</strong> Complete profile assessment
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Track progress, view recommendations, and manage applications
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Proactive Alerts</CardTitle>
                <CardDescription>
                  Smart notifications for scholarships, deadlines, and opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-accent">🔔</span> New scholarship available for your profile
                  </div>
                  <div className="text-sm">
                    <span className="text-primary">📅</span> Application deadline in 3 days
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Never miss important opportunities
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your journey to career success in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Take Assessment</h3>
              <p className="text-muted-foreground">Complete our comprehensive aptitude and interest quiz to understand your strengths</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Get Recommendations</h3>
              <p className="text-muted-foreground">Receive personalized career paths and course suggestions based on your profile</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Explore Options</h3>
              <p className="text-muted-foreground">Browse nearby colleges, courses, and scholarship opportunities</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Track Progress</h3>
              <p className="text-muted-foreground">Monitor your applications and stay updated with important deadlines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefits for Everyone
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Creating value for students, parents, and society as a whole
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Students */}
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-primary">For Students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Clear career direction based on scientific assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Access to verified government college information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Never miss important deadlines and opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Personalized learning and career pathways</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Parents */}
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-accent">For Parents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Peace of mind with data-driven career guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Transparent view of child's academic progress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Cost-effective education planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Access to scholarship and financial aid information</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Society */}
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-primary">For Society</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Better job-skill alignment in the workforce</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Reduced unemployment and underemployment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">More efficient allocation of educational resources</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Enhanced economic productivity and growth</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our platform has helped students achieve their career goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The career quiz helped me discover my passion for data science. Now I'm pursuing Computer Science at IIT Delhi!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                    P
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">Class 12 Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Found the perfect engineering college within 30km of my home with complete fee and placement details."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                    R
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Rajesh Kumar</p>
                    <p className="text-sm text-muted-foreground">Engineering Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The timeline tracker ensured I never missed any scholarship deadlines. Saved my family ₹2 lakhs!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Anita Patel</p>
                    <p className="text-sm text-muted-foreground">Medical Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted & Verified
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with government data and secured with enterprise-grade AI
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Government Data</h3>
              <p className="text-sm text-muted-foreground">Verified information from official education databases</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure AI</h3>
              <p className="text-sm text-muted-foreground">Enterprise-grade AI with privacy protection</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Verified Colleges</h3>
              <p className="text-sm text-muted-foreground">Only accredited institutions in our database</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">50K+ Students</h3>
              <p className="text-sm text-muted-foreground">Trusted by students across India</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-accent/10 px-6 py-3 rounded-full">
              <Shield className="h-5 w-5 text-accent mr-2" />
              <span className="text-accent font-medium">Powered by Government Data & Secure AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-primary rounded-lg p-2">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">CareerPath Advisor</span>
              </div>
              <p className="text-background/80 mb-4">
                Empowering students with personalized career guidance and verified educational opportunities.
              </p>
              <div className="flex space-x-4">
                {/* Social media placeholders */}
                <div className="w-8 h-8 bg-background/20 rounded-full"></div>
                <div className="w-8 h-8 bg-background/20 rounded-full"></div>
                <div className="w-8 h-8 bg-background/20 rounded-full"></div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-background transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Success Stories</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-background/80">
                <p>Email: info@careerpathadviser.gov.in</p>
                <p>Phone: 1800-XXX-XXXX</p>
                <p>Address: New Delhi, India</p>
              </div>
              
              {/* Partner Logos Placeholder */}
              <div className="mt-6">
                <p className="text-sm text-background/60 mb-3">Government Partners:</p>
                <div className="flex space-x-3">
                  <div className="w-12 h-8 bg-background/20 rounded"></div>
                  <div className="w-12 h-8 bg-background/20 rounded"></div>
                  <div className="w-12 h-8 bg-background/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; 2024 CareerPath Advisor. All rights reserved. A Government of India Initiative.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;