import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface SuccessModalProps {
  title: string;
  message: string;
}

export function SuccessModal({ title, message }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-8 max-w-sm w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-12 h-12 text-white" />
        </motion.div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', marginBottom: '12px' }}>
          {title}
        </h2>
        <p style={{ fontSize: '16px', color: '#666666' }}>
          {message}
        </p>
      </motion.div>
    </div>
  );
}
