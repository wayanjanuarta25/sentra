export type QuestionScore = {
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
};

export type DimensionScore = {
  brand: number;
  digital: number;
  social: number;
  insight: number;
};

export type AssessmentResult = {
  total: number;
  status: string;
  dimensions: DimensionScore;
  recommendations: string[];
};

export const calculateScore = (scores: QuestionScore): AssessmentResult => {
  const total = scores.q1 + scores.q2 + scores.q3 + scores.q4 + scores.q5;
  
  let status = "BARU MEMULAI";
  if (total >= 26 && total <= 50) status = "SEDANG BERTUMBUH";
  else if (total >= 51 && total <= 75) status = "SUDAH BERKEMBANG";
  else if (total >= 76) status = "SIAP BERSAING";

  const digital = Math.round(((scores.q1 + scores.q5) / 35) * 100);
  const brand = Math.round((scores.q3 / 25) * 100);
  const social = Math.round((scores.q2 / 20) * 100);
  const insight = Math.round((scores.q4 / 20) * 100);

  const dimensions = { brand, digital, social, insight };

  const recommendations: string[] = [];
  
  if (brand <= 50) {
    recommendations.push("PERKUAT IDENTITAS");
  }
  if (digital <= 50) {
    recommendations.push("BANGUN KEHADIRAN DIGITAL");
  }
  if (social <= 50) {
    recommendations.push("KOMUNIKASI LEBIH KONSISTEN");
  }
  if (insight <= 50) {
    recommendations.push("MULAI MEMBACA PERFORMA");
  }

  if (recommendations.length === 0 && total < 100) {
    recommendations.push("TERUS TINGKATKAN KONSISTENSI DIGITAL");
  }

  return {
    total,
    status,
    dimensions,
    recommendations
  };
};

export const QUESTIONS = [
  {
    id: "q1",
    title: "APAKAH USAHA KAMU SUDAH MEMILIKI WEBSITE?",
    options: [
      { label: "BELUM", value: 0 },
      { label: "SUDAH", value: 20 }
    ]
  },
  {
    id: "q2",
    title: "SEBERAPA AKTIF USAHAMU DI MEDIA SOSIAL?",
    options: [
      { label: "JARANG", value: 5 },
      { label: "KADANG", value: 12 },
      { label: "AKTIF", value: 20 }
    ]
  },
  {
    id: "q3",
    title: "APAKAH USAHA KAMU SUDAH MEMILIKI IDENTITAS VISUAL YANG KONSISTEN?",
    options: [
      { label: "BELUM", value: 0 },
      { label: "SEBAGIAN", value: 12 },
      { label: "SUDAH", value: 25 }
    ]
  },
  {
    id: "q4",
    title: "APAKAH KAMU RUTIN MENGEVALUASI PERFORMA DIGITAL USAHAMU?",
    options: [
      { label: "BELUM", value: 0 },
      { label: "KADANG", value: 10 },
      { label: "RUTIN", value: 20 }
    ]
  },
  {
    id: "q5",
    title: "DARI MANA SUMBER PELANGGAN UTAMAMU SAAT INI?",
    options: [
      { label: "REKOMENDASI", value: 5 },
      { label: "MEDIA SOSIAL", value: 10 },
      { label: "GOOGLE", value: 12 },
      { label: "WEBSITE", value: 15 }
    ]
  }
];
