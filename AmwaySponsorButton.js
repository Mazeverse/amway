import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

export default function AmwaySponsorButton() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  // number isn't in DOM until reveal to respect compliance
  const buildNumber = () => ["7022", "511", "757"].join("");

  const onReveal = () => {
    setTimeout(() => setRevealed(true), 120);
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildNumber());
      setCopied(true);
      setTimeout(() => setCopied(false), 1300);
    } catch (e) {
      console.error(e);
      alert("복사에 실패했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-200 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl border border-emerald-200 bg-white/90">
        <CardContent className="flex flex-col items-center justify-center p-10 space-y-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">
            암웨이 후원자 번호
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-5 w-full"
          >
            {!revealed ? (
              <Button
                aria-label="암웨이 후원자 번호 보기"
                className="px-6 py-3 text-lg rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg hover:from-emerald-600 hover:to-green-700 transition focus:ring-2 focus:ring-emerald-400"                onClick={onReveal}
              >
                암웨이 후원자 번호 보기
              </Button>
            ) : (
              <div className="flex flex-col items-center space-y-4 w-full">
                <motion.p
                  role="status"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="text-4xl font-extrabold text-gray-900 tracking-wide select-all"
                >
                  {buildNumber()}
                </motion.p>
                <div className="flex items-center gap-3">
                  <Button
                    aria-label="번호 복사하기"
                    onClick={onCopy}
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition focus:ring-2 focus:ring-emerald-400"                  >
                    {copied ? "복사됨!" : "복사하기"}
                  </Button>
                  <Button
                    aria-label="번호 가리기"
                    onClick={() => setRevealed(false)}
                    className="px-4 py-2 rounded-lg border border-emerald-200 text-emerald-700 hover:bg-emerald-50"                  >
                    가리기
                  </Button>
                </div>
              </div>
            )}
          </motion.div>

          {!revealed && (
            <p className="text-xs text-emerald-700/70">
              버튼을 누르기 전에는 번호가 표시되지 않습니다.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
