import { Button, ActionLink } from './index';

// Button Component Examples
export function ButtonExamples() {
  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold">Button Component Examples</h2>
      
      {/* Primary Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Primary Buttons</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary" size="sm">Small Primary</Button>
          <Button variant="primary" size="md">Medium Primary</Button>
          <Button variant="primary" size="lg">Large Primary</Button>
          <Button variant="primary" size="md" showArrow>With Arrow</Button>
          <Button variant="primary" size="md" isLoading>Loading...</Button>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Secondary Buttons</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="secondary" size="sm">Small Secondary</Button>
          <Button variant="secondary" size="md">Medium Secondary</Button>
          <Button variant="secondary" size="lg">Large Secondary</Button>
          <Button variant="secondary" size="md" showArrow>With Arrow</Button>
        </div>
      </div>

      {/* Outline Buttons */}
      <div className="space-y-4 bg-sky-900 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white">Outline Buttons (on dark background)</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="outline" size="sm">Small Outline</Button>
          <Button variant="outline" size="md">Medium Outline</Button>
          <Button variant="outline" size="lg">Large Outline</Button>
          <Button variant="outline" size="md" showArrow>With Arrow</Button>
        </div>
      </div>

      {/* Ghost Buttons */}
      <div className="space-y-4 bg-sky-900 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white">Ghost Buttons (on dark background)</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="ghost" size="sm">Small Ghost</Button>
          <Button variant="ghost" size="md">Medium Ghost</Button>
          <Button variant="ghost" size="lg">Large Ghost</Button>
          <Button variant="ghost" size="md" showArrow>With Arrow</Button>
        </div>
      </div>

      {/* Link Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Link Buttons</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="link" size="sm" showArrow>Small Link</Button>
          <Button variant="link" size="md" showArrow>Medium Link</Button>
          <Button variant="link" size="lg" showArrow>Large Link</Button>
        </div>
      </div>

      {/* Full Width */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Full Width Button</h3>
        <Button variant="primary" size="lg" fullWidth>Full Width Button</Button>
      </div>

      {/* As Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button as Link</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary" href="/signup" as="a">Go to Signup</Button>
          <Button variant="secondary" href="/about" as="a" showArrow>Learn More</Button>
        </div>
      </div>
    </div>
  );
}

// ActionLink Component Examples
export function ActionLinkExamples() {
  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold">ActionLink Component Examples</h2>
      
      {/* Light Color */}
      <div className="space-y-4 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-white">Light Color (on dark background)</h3>
        <div className="flex gap-6 flex-wrap">
          <ActionLink href="/about" color="light" size="sm">LEARN MORE</ActionLink>
          <ActionLink href="/about" color="light" size="md">LEARN MORE</ActionLink>
          <ActionLink href="/about" color="light" size="lg">LEARN MORE</ActionLink>
          <ActionLink href="/about" color="light" size="md" showArrow={false}>Without Arrow</ActionLink>
        </div>
      </div>

      {/* Dark Color */}
      <div className="space-y-4 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Dark Color (on light background)</h3>
        <div className="flex gap-6 flex-wrap">
          <ActionLink href="/community" color="dark" size="sm">SEE ALL INSTALLATIONS</ActionLink>
          <ActionLink href="/community" color="dark" size="md">Life Class</ActionLink>
          <ActionLink href="/community" color="dark" size="lg">Foundation Training</ActionLink>
        </div>
      </div>
    </div>
  );
}

// Usage in real components
export function RealWorldExamples() {
  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold">Real World Usage Examples</h2>
      
      {/* Card with ActionLink */}
      <div className="bg-gray-800 rounded-lg p-6 text-white max-w-md">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-xs font-bold text-gray-300 tracking-wide">WHO ARE WE?</div>
            <div className="text-2xl font-bold">About Us</div>
          </div>
          <ActionLink href="/about" color="light" size="sm">
            LEARN MORE
          </ActionLink>
        </div>
      </div>

      {/* Hero Section CTA */}
      <div className="bg-sky-900 rounded-lg p-8 text-center text-white max-w-lg mx-auto">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">JOIN OUR COMMUNITY</h1>
          <p className="text-lg">Experience a new chapter in your spiritual growth journey</p>
          <Button variant="secondary" size="lg" showArrow>
            JOIN US ON YOUTUBE
          </Button>
        </div>
      </div>

      {/* Form Submit */}
      <div className="bg-white rounded-lg border p-6 max-w-md">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Form</h3>
          <div className="space-y-2">
            <input type="email" placeholder="Your email" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Your message" rows={3} className="w-full p-3 border rounded-lg resize-none"></textarea>
          </div>
          <Button variant="primary" fullWidth>
            SEND MESSAGE
          </Button>
        </div>
      </div>
    </div>
  );
}
