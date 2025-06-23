// ব্ল্যাক হোল পেজ

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function BlackHolePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-indigo-950 text-white p-4">
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">ব্ল্যাক হোল: মহাবিশ্বের রহস্যময় গহ্বর</h1>
        <p className="text-lg md:text-xl mt-4 text-indigo-300">
          যেখানে আলো পর্যন্ত পালাতে পারে না...
        </p>
      </header>

      <section className="mb-12 max-w-4xl mx-auto">
        <Card className="bg-white/10">
          <CardContent className="p-6 text-base md:text-lg">
            <p className="mb-4">
              ব্ল্যাক হোল হলো মহাবিশ্বের এমন একটি জায়গা যেখানে মহাকর্ষ এতটাই শক্তিশালী যে কিছুই, এমনকি আলোও, সেখানে থেকে পালাতে পারে না।
            </p>
            <p>
              সাধারণত একটি বিশাল নক্ষত্র যখন নিজের জীবন শেষ করে, তখন তার কেন্দ্রীয় অংশ ধসে পড়ে তৈরি হয় এই ব্ল্যাক হোল। একে বলা হয় “গ্র্যাভিটেশনের জেলখানা।”
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Sparkles /> চমকপ্রদ তথ্য</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/10">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">ঘটনার দিগন্ত</h3>
              <p className="text-sm text-gray-300">
                এটি ব্ল্যাক হোলের সেই সীমানা যেখান থেকে কিছুই আর বাইরে যেতে পারে না।
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/10">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">সাধারণ ব্ল্যাক হোল</h3>
              <p className="text-sm text-gray-300">
                এগুলো স্টেলার ব্ল্যাক হোল, যেগুলো সাধারণত একটি বড় নক্ষত্র থেকে তৈরি হয়।
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/10">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">সুপারম্যাসিভ ব্ল্যাক হোল</h3>
              <p className="text-sm text-gray-300">
                প্রতিটি গ্যালাক্সির কেন্দ্রে থাকে একটি বিশাল ব্ল্যাক হোল — যেমন মিল্কি ওয়ে-এর কেন্দ্রে রয়েছে স্যাজিটারিয়াস A*।
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/10">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">টাইম ডাইলোশন</h3>
              <p className="text-sm text-gray-300">
                ব্ল্যাক হোলের নিকটে সময় ধীর হয়ে যায় — এটা দেখা যায় ‘Interstellar’ মুভিতেও!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-400 border-t border-white/10">
        © 2025 বাংলার আকাশ. All rights reserved.
      </footer>
    </div>
  );
            }
