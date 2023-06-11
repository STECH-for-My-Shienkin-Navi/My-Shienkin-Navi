type SupportTagType =
  | '給付奨学金'
  | '貸与奨学金'
  | '授業料減免'
  | '予約採用'
  | '在学採用'
  | '留学'
  | '高校'
  | '大学'
  | '大学院'
  | '専門学校';

type Location = '東京' | '大阪' | '名古屋' | '福岡' | '札幌' | '仙台' | '広島' | '沖縄' | 'その他';
type Selection = '選考';
type School = '高校生' | '大学生' | '高卒予定者' | '高卒者';
type SupportConditionsType = School | Selection | Location;

export type SupportDataType = {
  // 適当なID
  id: number;
  // 名前
  name: string;
  // 募集機関名
  organization: string;
  // 支援内容
  content: string;
  // 募集背景
  background: string;
  //タグ
  tag: SupportTagType[];
  // 募集条件一覧
  conditions: SupportConditionsType[];
  // 支援金情報URL
  url: string;
};
