import {PingController} from './controller/PingController';
import {PortalMockController} from './controller/PortalMockController';
import { DataController } from './controller/DataController';
import { ShienController } from './controller/ShienController';

import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()

// ライフチェックのための関数
exports.ping = functions.https.onRequest(async (req, res) => { PingController(req, res) });

// マイナポータルのモックAPI
exports.portalMock = functions.https.onRequest(async (req, res) => { PortalMockController(req, res) });

// データ共有にかかるAPI
exports.data = functions.https.onRequest(DataController);

// 支援金一覧の取得にかかるAPI
exports.shien = functions.https.onRequest(ShienController);