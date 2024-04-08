"use client";

import { Card, Divider, Subtitle, Text } from "@tremor/react";

import CityPicker from "@/components/CityPicker";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <Card className="bg-white max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">
          AI Weather App
        </Text>
        <Subtitle className="text-xl text-center">
          Using Next.js 13.3, Tailwind CSS, OpenAI, Tremor2.0 + more
        </Subtitle>
        <Divider className="my-10 bg-black" />
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
