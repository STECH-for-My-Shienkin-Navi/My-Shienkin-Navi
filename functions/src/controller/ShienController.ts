import * as express from 'express';
import * as cors from 'cors';
import * as admin from 'firebase-admin'

// 各支援金データの変数型
interface ShienkinData {
  title: string
  contents: string
  path: string
  income: number
}

const supportMoneyList: ShienkinData[] = [
  {
    title: '日本学生支援機構奨学金',
    contents: '経済的理由で修学が困難な優れた学生等に学資の貸与及び給付を行っています。',
    path: '/SupportDetail',
    income: 5000000
  },
  {
    title: '三井住友銀行教育ローン',
    contents: 'お子さまの教育資金を幅広く、迅速にサポートいたします。',
    path: '/SupportDetail',
    income: 3000000
  },
  {
    title: '日本学生支援機構教育支援資金',
    contents: '低所得世帯に属する方が大学等に修学するために必要な経費を貸付する制度です。',
    path: '/SupportDetail',
    income: 6000000
  },
  {
    title: '奨学金返還免除制度',
    contents: '奨学金の返還を免除する制度で、一定の要件を満たす学生が対象です。',
    path: '/SupportDetail',
    income: 7000000
  },
  {
    title: '学生生活費貸与制度',
    contents: '生活費などの貸付を行う制度で、返済免除型の貸与もあります。',
    path: '/SupportDetail',
    income: 2000000
  },
  {
    title: '特別支援教育費助成',
    contents: '特別な支援が必要な子どもの教育費を助成する制度です。',
    path: '/SupportDetail',
    income: 8000000
  },
];

export const ShienController = express();
ShienController.use(cors({origin: true}));


// GETリクエストの処理
ShienController.get('/', async (req, res) => {
  var shienkinData: ShienkinData[] = [];

  // 給与条件が指定されているか確認
  const incomeLimit = req.query.income;
  if(typeof incomeLimit == 'string') {  // 指定されている場合
    // 条件付きでデータを取得
    await admin.firestore().collection('shienkinData').where('income', '<=', parseInt(incomeLimit)).get()
      .then(result => {
        result.forEach(elm => {
          shienkinData.push(elm.data() as any as ShienkinData);
        })
      });
  } else {  // 指定されていない場合
    // 全てのデータを取得
    await admin.firestore().collection('shienkinData').get()
      .then(result => {
        console.log(result);
        result.forEach(elm => {
          shienkinData.push(elm.data() as any as ShienkinData);
        });
      });
  }

  res.json({data: shienkinData});
})

// POSTリクエストで、Firestoreにデータがない場合のみ、新たにデータを追加
var dataFlag: boolean = false;
ShienController.post('/', async (req, res) => {
  // Firestoreに既にデータがあるかどうかの確認
  await admin.firestore().collection('shienkinData').where('title', '==', '日本学生支援機構奨学金').get()
    .then(result => {
      if(!result.empty) dataFlag = true;
    })

  // データが無かった時に新しいデータを追加
  if(!dataFlag) {
    supportMoneyList.forEach(elm => {
      admin.firestore().collection('shienkinData').add(elm);
    })
  }

  res.json({message: '正常に処理を終了しました。'});
})
