import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

export default function AmwaySponsorButton() {
  const [revealed, setRevealed] = useState(false);

  const buildNumber = () => ["7022", "511", "757"].join("");
  const onReveal = () => {
    setTimeout(() => setRevealed(true), 150);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl border border-gray-200 bg-white/90">
        <CardContent className="flex flex-col items-center justify-center p-8 space-y-6">
          <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">
            암웨이 후원자 번호
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-4"
          >
            {!revealed ? (
              <Button
                aria-label="암웨이 후원자 번호 보기"
                className="px-6 py-3 text-lg rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:from-indigo-600 hover:to-purple-600 transition"
                onClick={onReveal}
              >
                암웨이 후원자 번호 보기
              </Button>
            ) : (
              <motion.p
                role="status"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-3xl font-bold text-gray-900 tracking-wide select-all"
              >
                {buildNumber()}
              </motion.p>
            )}
          </motion.div>

          {!revealed && (
            <p className="text-xs text-gray-500">
              버튼을 누르기 전에는 번호가 표시되지 않습니다.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}