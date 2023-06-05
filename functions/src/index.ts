import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()

// ライフチェックのための関数
exports.ping = functions.https.onRequest(async (req, res) => {
  res.json({msg: "Hello, firebase functions."});
});
