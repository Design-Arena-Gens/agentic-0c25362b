'use client';

import { useState } from 'react';
import { Sparkles, PenTool, Video, Palette, Calendar } from 'lucide-react';

type TaskType = 'blog' | 'script' | 'design' | null;

interface BlogData {
  title: string;
  outline: string[];
  angle: string;
}

interface ScriptData {
  platform: string;
  hook: string;
  mainPoints: string[];
  ending: string;
}

interface DesignData {
  type: string;
  purpose: string;
  layout: string;
  colorStyle: string;
  textPlaceholders: string[];
}

export default function Home() {
  const [todayTask, setTodayTask] = useState<TaskType>(null);
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [scriptData, setScriptData] = useState<ScriptData | null>(null);
  const [designData, setDesignData] = useState<DesignData | null>(null);

  const decideDailyTask = () => {
    const tasks: TaskType[] = ['blog', 'script', 'design'];
    const selectedTask = tasks[Math.floor(Math.random() * tasks.length)];
    setTodayTask(selectedTask);

    // Generate task content
    switch (selectedTask) {
      case 'blog':
        generateBlog();
        break;
      case 'script':
        generateScript();
        break;
      case 'design':
        generateDesign();
        break;
    }
  };

  const generateBlog = () => {
    const topics = [
      {
        title: "5 No-Code Tools Every Solo Builder Needs in 2025",
        outline: [
          "H1: Introduction - Why no-code matters for solo builders",
          "H2: Tool 1 - Automation (Zapier/Make)",
          "H3: Best use cases",
          "H2: Tool 2 - Landing pages (Framer/Webflow)",
          "H3: When to use each",
          "H2: Tool 3 - Database (Airtable/Notion)",
          "H2: Tool 4 - Payment (Stripe/Lemon Squeezy)",
          "H2: Tool 5 - Analytics (Plausible/Fathom)",
          "H3: Privacy-first tracking",
          "H1: Conclusion - Building your stack"
        ],
        angle: "Focused on actual tools solo builders use daily, not generic SaaS lists"
      },
      {
        title: "How to Validate Your Product Idea in 48 Hours",
        outline: [
          "H1: Why 48 hours?",
          "H2: Hour 0-8: Research phase",
          "H3: Reddit & Twitter search",
          "H3: Competitor analysis",
          "H2: Hour 8-24: Landing page creation",
          "H3: Copy that converts",
          "H2: Hour 24-36: Traffic generation",
          "H3: Organic vs paid",
          "H2: Hour 36-48: Collect & analyze data",
          "H3: What metrics matter",
          "H1: Decision framework"
        ],
        angle: "Actionable timeline with specific hours, not vague 'validate your idea' advice"
      },
      {
        title: "From $0 to First Sale: My 30-Day Digital Product Launch",
        outline: [
          "H1: The product - What I built",
          "H2: Week 1: Building in public",
          "H3: Twitter strategy",
          "H3: Progress screenshots",
          "H2: Week 2: Email list building",
          "H3: Lead magnet creation",
          "H2: Week 3: Pre-launch hype",
          "H3: Early bird pricing",
          "H2: Week 4: Launch day tactics",
          "H3: What worked, what didn't",
          "H1: Revenue breakdown & lessons"
        ],
        angle: "Real case study with numbers and mistakes, not theoretical launch guide"
      }
    ];

    const selected = topics[Math.floor(Math.random() * topics.length)];
    setBlogData(selected);
    setScriptData(null);
    setDesignData(null);
  };

  const generateScript = () => {
    const scripts = [
      {
        platform: "YouTube Short",
        hook: "Stop wasting time on tools you don't need",
        mainPoints: [
          "Most creators use 15+ tools when they only need 5",
          "Here's my exact stack that makes me $5k/month",
          "Tool 1: [Name] for [Purpose]",
          "Tool 2: [Name] for [Purpose]",
          "Everything else is distraction"
        ],
        ending: "Link in bio for my full setup guide"
      },
      {
        platform: "Instagram Reel",
        hook: "This design mistake is killing your conversions",
        mainPoints: [
          "Your CTA button is the wrong color",
          "Here's why: [Contrast explanation]",
          "Before/After comparison",
          "Simple fix takes 5 minutes",
          "Your conversion rate will thank me"
        ],
        ending: "Save this for later and follow for more design tips"
      },
      {
        platform: "TikTok",
        hook: "POV: You just learned this productivity hack",
        mainPoints: [
          "Stop scheduling your day by hour",
          "Use energy blocks instead",
          "Morning: Deep work (creative tasks)",
          "Afternoon: Shallow work (admin)",
          "Evening: Learning (consume content)",
          "Your output doubles"
        ],
        ending: "Try this for one week and report back"
      }
    ];

    const selected = scripts[Math.floor(Math.random() * scripts.length)];
    setScriptData(selected);
    setBlogData(null);
    setDesignData(null);
  };

  const generateDesign = () => {
    const designs = [
      {
        type: "Hero Section",
        purpose: "Landing page for digital product",
        layout: "Split layout - Left: Headline + CTA, Right: Product mockup/screenshot",
        colorStyle: "Dark mode with accent gradient (Purple to Blue). Use #1a1a2e as base, #16213e for cards, gradient #8b5cf6 to #3b82f6",
        textPlaceholders: [
          "Headline: [Your Problem-Solving Promise]",
          "Subheadline: [What you deliver in one line]",
          "CTA Button: Get Started Free",
          "Social Proof: '2,000+ builders trust us'"
        ]
      },
      {
        type: "Pricing Card",
        purpose: "SaaS pricing section",
        layout: "3-column card layout. Center card elevated with 'Popular' badge",
        colorStyle: "Clean white cards on light gray (#f8f9fa) background. Accent color: #10b981 for popular tier",
        textPlaceholders: [
          "Tier 1: Starter - $9/mo",
          "Tier 2: Pro - $29/mo (Popular)",
          "Tier 3: Business - $99/mo",
          "Feature bullets for each tier"
        ]
      },
      {
        type: "YouTube Thumbnail",
        purpose: "Tech tutorial video",
        layout: "Face on left (30% width), Bold text right (70%). Arrow pointing to text",
        colorStyle: "High contrast: Bright yellow (#fbbf24) background, Black text with white outline, Face with slight shadow",
        textPlaceholders: [
          "Main text: BIG BOLD STATEMENT (2-4 words)",
          "Subtext (optional): Small clarifying text",
          "Emotion: Excited/Surprised face"
        ]
      }
    ];

    const selected = designs[Math.floor(Math.random() * designs.length)];
    setDesignData(selected);
    setBlogData(null);
    setScriptData(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Buildora Agent
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your personal creator assistant. No thinking. Just doing.
          </p>
        </header>

        {/* Main Action */}
        {!todayTask ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <Calendar className="w-16 h-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What should I work on today?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
              I'll decide your exact task for today. No overthinking. No options. Just clear direction.
            </p>
            <button
              onClick={decideDailyTask}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Decide My Task Now
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Task Decision Card */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-6 md:p-8 text-white">
              <div className="flex items-center gap-3 mb-3">
                {todayTask === 'blog' && <PenTool className="w-8 h-8" />}
                {todayTask === 'script' && <Video className="w-8 h-8" />}
                {todayTask === 'design' && <Palette className="w-8 h-8" />}
                <h2 className="text-2xl md:text-3xl font-bold">Today's Task</h2>
              </div>
              <p className="text-xl md:text-2xl font-semibold mb-2">
                {todayTask === 'blog' && 'Write 1 Blog Post'}
                {todayTask === 'script' && 'Create 1 Video Script'}
                {todayTask === 'design' && 'Design 1 Asset'}
              </p>
              <p className="text-indigo-100">
                {todayTask === 'blog' && 'Content builds authority. One quality blog will drive organic traffic and establish expertise.'}
                {todayTask === 'script' && 'Short-form content builds reach. One script will grow your audience and test messaging.'}
                {todayTask === 'design' && 'Visual assets sell. One design will improve conversion or brand presence.'}
              </p>
            </div>

            {/* Blog Content */}
            {blogData && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <PenTool className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Blog Details</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Title</h4>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{blogData.title}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Outline</h4>
                    <ul className="space-y-2">
                      {blogData.outline.map((item, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-indigo-200 dark:border-indigo-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Key Angle</h4>
                    <p className="text-gray-700 dark:text-gray-300 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      {blogData.angle}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Script Content */}
            {scriptData && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Video className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Script Details</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Platform</h4>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{scriptData.platform}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Hook (First 3 seconds)</h4>
                    <p className="text-gray-900 dark:text-white font-semibold bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      "{scriptData.hook}"
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Main Points</h4>
                    <ul className="space-y-2">
                      {scriptData.mainPoints.map((point, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-indigo-200 dark:border-indigo-700">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Ending</h4>
                    <p className="text-gray-700 dark:text-gray-300 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      {scriptData.ending}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Design Content */}
            {designData && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Design Brief</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Asset Type</h4>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{designData.type}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Purpose</h4>
                    <p className="text-gray-700 dark:text-gray-300">{designData.purpose}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Layout Structure</h4>
                    <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      {designData.layout}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Color & Style</h4>
                    <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg font-mono text-sm">
                      {designData.colorStyle}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Text Placeholders</h4>
                    <ul className="space-y-2">
                      {designData.textPlaceholders.map((text, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-indigo-200 dark:border-indigo-700">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Action Button */}
            <div className="text-center pt-4">
              <button
                onClick={decideDailyTask}
                className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get New Task
              </button>
            </div>
          </div>
        )}

        {/* Footer Info */}
        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Built for solo builders who ship daily</p>
        </footer>
      </div>
    </main>
  );
}
