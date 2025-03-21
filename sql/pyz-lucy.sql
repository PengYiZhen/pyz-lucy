/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : pyz-lucy

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 21/03/2025 01:13:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for prize
-- ----------------------------
DROP TABLE IF EXISTS `prize`;
CREATE TABLE `prize`  (
  `type` int(11) NOT NULL COMMENT '类型',
  `count` int(11) NOT NULL COMMENT '奖品份数',
  `text` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '几等奖',
  `title` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '奖品描述',
  `img` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '图片Base64',
  PRIMARY KEY (`type`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '奖励列表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of prize
-- ----------------------------
INSERT INTO `prize` VALUES (0, 100, '特别奖', ' ', NULL);
INSERT INTO `prize` VALUES (1, 1, '一等奖', 'Mac Pro', '../img/mbp.jpg');
INSERT INTO `prize` VALUES (2, 2, '二等奖', '华为 Mate30', '../img/huawei.png');
INSERT INTO `prize` VALUES (3, 3, '三等奖', 'Ipad Mini5', '../img/ipad.jpg');
INSERT INTO `prize` VALUES (4, 8, '四等奖', '大疆无人机', '../img/spark.jpg');
INSERT INTO `prize` VALUES (5, 8, '五等奖', 'Kindle', '../img/kindle.jpg');
INSERT INTO `prize` VALUES (6, 8, '六等奖', '漫步者蓝牙耳机', '../img/edifier.jpg');
INSERT INTO `prize` VALUES (7, 10, '幸运奖', '娃娃', NULL);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `openid` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'id',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '电话',
  `status` int(10) UNSIGNED NULL DEFAULT 0 COMMENT '中奖状态',
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '几等奖',
  PRIMARY KEY (`openid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '抽奖用户列表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'A', '138xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('10', 'A', '157xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('11', 'A', '156xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('12', 'A', '155xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('13', 'A', '152xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('13sasda31', 'A', '11111', 0, '');
INSERT INTO `users` VALUES ('14', 'A', '153xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('15', 'A', '151xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('16', 'A', '150xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('17', 'A', '189xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('19', 'A', '188xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('2', 'A', '139xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('20', 'A', '187xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('21', 'A', '186xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('22', 'A', '185xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('23', 'A', '184xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('24', 'A', '183xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('25', 'A', '182xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('26', 'A', '181xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('27', 'A', '180xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('28', 'A', '179xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('29', 'A', '178xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('2sed334', 'A', '3333', 0, '');
INSERT INTO `users` VALUES ('3', 'A', '137xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('30', 'A', '177xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('31', 'A', '176xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('32', 'A', '175xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('33', 'A', '174xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('34', 'A', '173xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('35', 'A', '172xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('36', 'A', '171xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('37', 'A', '170xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('38', 'A', '169xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('39', 'A', '168xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('4', 'A', '136xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('40', 'A', '167xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('41', 'A', '166xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('42', 'A', '165xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('43', 'A', '164xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('44', 'A', '163xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('45', 'A', '162xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('46', 'A', '161xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('47', 'A', '160xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('48', 'A', '159xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('49', 'A', '158xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('5', 'A', '135xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('50', 'A', '157xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('51', 'A', '156xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('52', 'A', '155xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('53', 'A', '154xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('54', 'A', '153xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('55', 'A', '152xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('56', 'A', '151xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('57', 'A', '150xxxxxxxx', 0, '');
INSERT INTO `users` VALUES ('6', 'A', '134xxxxxxxx', 0, '');

SET FOREIGN_KEY_CHECKS = 1;
