import { useState } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AMWAY_SPONSOR_NUMBER } from "../config"; // ✅ 추가된 부분

export default function AmwaySponsorButton() {
  const [sponsorNumber] = useState(AMWAY_SPONSOR_NUMBER); // ✅ 여기서 config 값 사용
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sponsorNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("복사 오류:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-200 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border border-emerald-200 p-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          Amway Sponsor Number
        </h1>
        <div className="flex flex-col items-center space-y-4 w-full">
          <div className="w-full text-center">
            <span className="text-xl font-semibold text-gray-800 tracking-wide select-all">
              {sponsorNumber}
            </span>
          </div>
          <Button
            onClick={copyToClipboard}
            className="w-full py-2 px-4 rounded-lg bg-emerald-500 text-white shadow-lg hover:from-emerald-600 hover:to-green-600 transition focus:ring-4 focus:ring-emerald-300"
          >
            {copied ? "복사됨 ✅" : "번호 복사"}
          </Button>
        </div>
      </div>
    </div>
  );
}
