import {PingController} from './controller/PingController';
import {PortalMockController} from './controller/PortalMockController';
import { DataController } from './controller/DataController';


import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp()

// ライフチェックのための関数
exports.ping = functions.https.onRequest(async (req, res) => { PingController(req, res) });

// マイナポータルのモックAPI
exports.portalMock = functions.https.onRequest(async (req, res) => { PortalMockController(req, res) });

// データ共有にかかるAPI
exports.data = functions.https.onRequest(DataController);