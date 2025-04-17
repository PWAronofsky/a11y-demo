import Image from "next/image";
import { ToggleContent } from "@/app/components/ToggleContent";
import { AlertDemo } from "@/app/components/AlertDemo";
import { KeyboardNavigation } from "@/app/components/KeyboardNavigation";

export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto" suppressHydrationWarning>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">WCAG Accessibility Demo</h1>
        <p className="text-lg">This page demonstrates various Web Content Accessibility Guidelines (WCAG) requirements.</p>
      </header>

      <main>
        <section aria-labelledby="semantic-heading" className="mb-8">
          <h2 id="semantic-heading" className="text-2xl font-bold mb-4">1. Semantic HTML</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded">
            <p className="text-gray-900 dark:text-gray-100">This section uses proper heading hierarchy and semantic HTML elements.</p>
            <nav aria-label="Main navigation" className="mt-4">
              <ul className="list-disc pl-6 text-gray-900 dark:text-gray-100">
                <li><a href="#semantic-heading" className="text-blue-600 dark:text-blue-400 hover:underline">Semantic HTML</a></li>
                <li><a href="#aria-heading" className="text-blue-600 dark:text-blue-400 hover:underline">ARIA Attributes</a></li>
                <li><a href="#keyboard-heading" className="text-blue-600 dark:text-blue-400 hover:underline">Keyboard Navigation</a></li>
                <li><a href="#forms-heading" className="text-blue-600 dark:text-blue-400 hover:underline">Accessible Forms</a></li>  
                <li><a href="#images-heading" className="text-blue-600 dark:text-blue-400 hover:underline">Accessible Images</a></li>
              </ul>
            </nav>
          </div>
        </section>

        <section aria-labelledby="aria-heading" className="mb-8">
          <h2 id="aria-heading" className="text-2xl font-bold mb-4">2. ARIA Attributes</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Alert Demo</h3>
              <p className="mb-4 text-gray-900 dark:text-gray-100">This demonstrates how screen readers announce dynamic content updates using aria-live and role="alert".</p>
              <AlertDemo />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Toggle Content Demo</h3>
              <p className="mb-4 text-gray-900 dark:text-gray-100">This demonstrates how to make content expandable and collapsible while maintaining accessibility.</p>
              <ToggleContent />
            </div>
          </div>
        </section>

        <section aria-labelledby="keyboard-heading" className="mb-8">
          <h2 id="keyboard-heading" className="text-2xl font-bold mb-4">3. Keyboard Navigation</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded">
            <KeyboardNavigation />
          </div>
        </section>

        <section aria-labelledby="forms-heading" className="mb-8">
          <h2 id="forms-heading" className="text-2xl font-bold mb-4">4. Accessible Forms</h2>
          <form className="bg-gray-100 dark:bg-gray-900 p-4 rounded">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-gray-100">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-required="true"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-gray-100">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-required="true"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </section>

        <section aria-labelledby="images-heading" className="mb-8">
          <h2 id="images-heading" className="text-2xl font-bold mb-4">5. Accessible Images</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded">
            <Image
              src="/next.svg"
              alt="Next.js logo - A white logo with the text 'Next.js' in a modern sans-serif font"
              width={180}
              height={38}
              className="dark:invert"
            />
            <p className="mt-4 text-gray-900 dark:text-gray-100">The image above includes a descriptive alt text that explains what the image contains.</p>
          </div>
        </section>
      </main>

      <footer className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-900 dark:text-gray-100">This demo page was created to showcase WCAG accessibility features.</p>
        <p className="mt-2 text-gray-900 dark:text-gray-100">For more information about accessibility guidelines, visit the <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">WCAG documentation</a>.</p>
      </footer>
    </div>
  );
}
