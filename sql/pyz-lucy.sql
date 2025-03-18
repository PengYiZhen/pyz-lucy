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

 Date: 19/03/2025 00:10:25
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
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '奖励列表' ROW_FORMAT = DYNAMIC;

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
  PRIMARY KEY (`openid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '抽奖用户列表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '彭一真', '138xxxxxxxx');
INSERT INTO `users` VALUES ('10', '彭一真', '157xxxxxxxx');
INSERT INTO `users` VALUES ('11', '彭一真', '156xxxxxxxx');
INSERT INTO `users` VALUES ('12', '彭一真', '155xxxxxxxx');
INSERT INTO `users` VALUES ('13', '彭一真', '152xxxxxxxx');
INSERT INTO `users` VALUES ('13sasda31', '彭一真', '11111');
INSERT INTO `users` VALUES ('14', '彭一真', '153xxxxxxxx');
INSERT INTO `users` VALUES ('15', '彭一真', '151xxxxxxxx');
INSERT INTO `users` VALUES ('16', '彭一真', '150xxxxxxxx');
INSERT INTO `users` VALUES ('17', '彭一真', '189xxxxxxxx');
INSERT INTO `users` VALUES ('19', '彭一真', '188xxxxxxxx');
INSERT INTO `users` VALUES ('2', '彭一真', '139xxxxxxxx');
INSERT INTO `users` VALUES ('20', '彭一真', '187xxxxxxxx');
INSERT INTO `users` VALUES ('21', '彭一真', '186xxxxxxxx');
INSERT INTO `users` VALUES ('22', '彭一真', '185xxxxxxxx');
INSERT INTO `users` VALUES ('23', '彭一真1', '184xxxxxxxx');
INSERT INTO `users` VALUES ('24', '彭一真2', '183xxxxxxxx');
INSERT INTO `users` VALUES ('25', '彭一真3', '182xxxxxxxx');
INSERT INTO `users` VALUES ('26', '彭一真4', '181xxxxxxxx');
INSERT INTO `users` VALUES ('27', '彭一真5', '180xxxxxxxx');
INSERT INTO `users` VALUES ('28', '彭一真6', '179xxxxxxxx');
INSERT INTO `users` VALUES ('29', '彭一真7', '178xxxxxxxx');
INSERT INTO `users` VALUES ('2sed334', '彭一真8', '3333');
INSERT INTO `users` VALUES ('3', '彭一真9', '137xxxxxxxx');
INSERT INTO `users` VALUES ('30', '彭一真10', '177xxxxxxxx');
INSERT INTO `users` VALUES ('31', '彭一真11', '176xxxxxxxx');
INSERT INTO `users` VALUES ('32', '彭一真12', '175xxxxxxxx');
INSERT INTO `users` VALUES ('33', '彭一真13', '174xxxxxxxx');
INSERT INTO `users` VALUES ('34', '彭一真14', '173xxxxxxxx');
INSERT INTO `users` VALUES ('35', '彭一真15', '172xxxxxxxx');
INSERT INTO `users` VALUES ('36', '彭一真16', '171xxxxxxxx');
INSERT INTO `users` VALUES ('37', '彭一真177', '170xxxxxxxx');
INSERT INTO `users` VALUES ('38', '彭一真18', '169xxxxxxxx');
INSERT INTO `users` VALUES ('39', '彭一真19', '168xxxxxxxx');
INSERT INTO `users` VALUES ('4', '彭一真20', '136xxxxxxxx');
INSERT INTO `users` VALUES ('40', '彭一真21', '167xxxxxxxx');
INSERT INTO `users` VALUES ('41', '彭一真22', '166xxxxxxxx');
INSERT INTO `users` VALUES ('42', '彭一真23', '165xxxxxxxx');
INSERT INTO `users` VALUES ('43', '彭一真24', '164xxxxxxxx');
INSERT INTO `users` VALUES ('44', '彭一真25', '163xxxxxxxx');
INSERT INTO `users` VALUES ('45', '彭一真26', '162xxxxxxxx');
INSERT INTO `users` VALUES ('46', '彭一真27', '161xxxxxxxx');
INSERT INTO `users` VALUES ('47', '彭一真28', '160xxxxxxxx');
INSERT INTO `users` VALUES ('48', '彭一真29', '159xxxxxxxx');
INSERT INTO `users` VALUES ('49', '彭一真30', '158xxxxxxxx');
INSERT INTO `users` VALUES ('5', '彭一真31', '135xxxxxxxx');
INSERT INTO `users` VALUES ('50', '彭一真32', '157xxxxxxxx');
INSERT INTO `users` VALUES ('51', '彭一真33', '156xxxxxxxx');
INSERT INTO `users` VALUES ('52', '彭一真34', '155xxxxxxxx');
INSERT INTO `users` VALUES ('53', '彭一真35', '154xxxxxxxx');
INSERT INTO `users` VALUES ('54', '彭一真36', '153xxxxxxxx');
INSERT INTO `users` VALUES ('55', '彭一真37', '152xxxxxxxx');
INSERT INTO `users` VALUES ('56', '彭一真38', '151xxxxxxxx');
INSERT INTO `users` VALUES ('57', '彭一真39', '150xxxxxxxx');
INSERT INTO `users` VALUES ('6', '彭一真40', '134xxxxxxxx');

SET FOREIGN_KEY_CHECKS = 1;
