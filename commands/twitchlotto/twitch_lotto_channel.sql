CREATE TABLE IF NOT EXISTS `data`.`Twitch_Lotto_Channel` (
	`Name` VARCHAR(100) NOT NULL COLLATE 'utf8mb4_general_ci',
	`Amount` INT(11) NULL DEFAULT NULL,
	`Scored` INT(11) NULL DEFAULT NULL,
	`Tagged` INT(11) NULL DEFAULT NULL,
	PRIMARY KEY (`Name`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;