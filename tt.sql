SELECT 
  DISTINCT `distinctAlias`.`User_id` AS `ids_User_id` 
FROM 
  (
    SELECT 
      `User`.`createdAt` AS `User_createdAt`, 
      `User`.`updatedAt` AS `User_updatedAt`, 
      `User`.`deletedAt` AS `User_deletedAt`, 
      `User`.`id` AS `User_id`, 
      `User`.`email` AS `User_email`, 
      `User`.`password` AS `User_password`, 
      `User`.`emailVerified` AS `User_emailVerified`, 
      `User`.`profileId` AS `User_profileId`, 
      `User`.`jobId` AS `User_jobId`, 
      `User`.`devCareerId` AS `User_devCareerId`, 
      `User__User_devCareer`.`createdAt` AS `User__User_devCareer_createdAt`, 
      `User__User_devCareer`.`updatedAt` AS `User__User_devCareer_updatedAt`, 
      `User__User_devCareer`.`deletedAt` AS `User__User_devCareer_deletedAt`, 
      `User__User_devCareer`.`id` AS `User__User_devCareer_id`, 
      `User__User_devCareer`.`category` AS `User__User_devCareer_category`, 
      `User__User_job`.`createdAt` AS `User__User_job_createdAt`, 
      `User__User_job`.`updatedAt` AS `User__User_job_updatedAt`, 
      `User__User_job`.`deletedAt` AS `User__User_job_deletedAt`, 
      `User__User_job`.`id` AS `User__User_job_id`, 
      `User__User_job`.`category` AS `User__User_job_category`, 
      `User__User_profile`.`createdAt` AS `User__User_profile_createdAt`, 
      `User__User_profile`.`updatedAt` AS `User__User_profile_updatedAt`, 
      `User__User_profile`.`deletedAt` AS `User__User_profile_deletedAt`,
      `User__User_profile`.`id` AS `User__User_profile_id`, 
      `User__User_profile`.`nickname` AS `User__User_profile_nickname`, 
      `User__User_profile`.`profileImg` AS `User__User_profile_profileImg`, 
      `User__User_profile`.`gender` AS `User__User_profile_gender`, 
      `User__User_techStacks`.`createdAt` AS `User__User_techStacks_createdAt`, 
      `User__User_techStacks`.`updatedAt` AS `User__User_techStacks_updatedAt`, 
      `User__User_techStacks`.`deletedAt` AS `User__User_techStacks_deletedAt`, 
      `User__User_techStacks`.`id` AS `User__User_techStacks_id`, 
      `User__User_techStacks`.`stackName` AS `User__User_techStacks_stackName`, 
      `User__User_techStacks`.`stackImg` AS `User__User_techStacks_stackImg`, 
      `User__User_ownedStudies`.`createdAt` AS `User__User_ownedStudies_createdAt`, 
      `User__User_ownedStudies`.`updatedAt` AS `User__User_ownedStudies_updatedAt`, 
      `User__User_ownedStudies`.`deletedAt` AS `User__User_ownedStudies_deletedAt`, 
      `User__User_ownedStudies`.`id` AS `User__User_ownedStudies_id`, 
      `User__User_ownedStudies`.`name` AS `User__User_ownedStudies_name`, 
      `User__User_ownedStudies`.`content` AS `User__User_ownedStudies_content`, 
      `User__User_ownedStudies`.`attendantsLimit` AS `User__User_ownedStudies_attendantsLimit`, 
      `User__User_ownedStudies`.`startDate` AS `User__User_ownedStudies_startDate`, 
      `User__User_ownedStudies`.`endDate` AS `User__User_ownedStudies_endDate`, 
      `User__User_ownedStudies`.`recruitId` AS `User__User_ownedStudies_recruitId`, 
      `User__User_ownedStudies`.`ownerId` AS `User__User_ownedStudies_ownerId`, 
      `User__User_inquiries`.`createdAt` AS `User__User_inquiries_createdAt`, 
      `User__User_inquiries`.`updatedAt` AS `User__User_inquiries_updatedAt`, 
      `User__User_inquiries`.`deletedAt` AS `User__User_inquiries_deletedAt`, \
      `User__User_inquiries`.`id` AS `User__User_inquiries_id`, 
      `User__User_inquiries`.`title` AS `User__User_inquiries_title`, 
      `User__User_inquiries`.`contents` AS `User__User_inquiries_contents`, 
      `User__User_inquiries`.`inquiryResponseId` AS `User__User_inquiries_inquiryResponseId`, 
      `User__User_inquiries`.`userId` AS `User__User_inquiries_userId`, 
      `User__User_inquiries`.`studyId` AS `User__User_inquiries_studyId`, 
      `User__User_participatingStudies`.`createdAt` AS `User__User_participatingStudies_createdAt`, 
      `User__User_participatingStudies`.`updatedAt` AS `User__User_participatingStudies_updatedAt`, 
      `User__User_participatingStudies`.`deletedAt` AS `User__User_participatingStudies_deletedAt`, 
      `User__User_participatingStudies`.`id` AS `User__User_participatingStudies_id`, 
      `User__User_participatingStudies`.`name` AS `User__User_participatingStudies_name`, 
      `User__User_participatingStudies`.`content` AS `User__User_participatingStudies_content`, 
      `User__User_participatingStudies`.`attendantsLimit` AS `User__User_participatingStudies_attendantsLimit`, 
      `User__User_participatingStudies`.`startDate` AS `User__User_participatingStudies_startDate`,
      `User__User_participatingStudies`.`endDate` AS `User__User_participatingStudies_endDate`, 
      `User__User_participatingStudies`.`recruitId` AS `User__User_participatingStudies_recruitId`, 
      `User__User_participatingStudies`.`ownerId` AS `User__User_participatingStudies_ownerId`, 
      `User__User_bookmarkedStudies`.`createdAt` AS `User__User_bookmarkedStudies_createdAt`, 
      `User__User_bookmarkedStudies`.`updatedAt` AS `User__User_bookmarkedStudies_updatedAt`, 
      `User__User_bookmarkedStudies`.`deletedAt` AS `User__User_bookmarkedStudies_deletedAt`, 
      `User__User_bookmarkedStudies`.`id` AS `User__User_bookmarkedStudies_id`, 
      `User__User_bookmarkedStudies`.`name` AS `User__User_bookmarkedStudies_name`, 
      `User__User_bookmarkedStudies`.`content` AS `User__User_bookmarkedStudies_content`, 
      `User__User_bookmarkedStudies`.`attendantsLimit` AS `User__User_bookmarkedStudies_attendantsLimit`, 
      `User__User_bookmarkedStudies`.`startDate` AS `User__User_bookmarkedStudies_startDate`, 
      `User__User_bookmarkedStudies`.`endDate` AS `User__User_bookmarkedStudies_endDate`, 
      `User__User_bookmarkedStudies`.`recruitId` AS `User__User_bookmarkedStudies_recruitId`, 
      `User__User_bookmarkedStudies`.`ownerId` AS `User__User_bookmarkedStudies_ownerId`, 
      `User__User_ownedStudies__User__User_ownedStudies_recruit`.`createdAt` AS `550620ad1e1e2c864a2589796ec6da4d91555d5c`, 
      `User__User_ownedStudies__User__User_ownedStudies_recruit`.`updatedAt` AS `eae23ee0d543131f5382d8693295b02c47873cff`, 
      `User__User_ownedStudies__User__User_ownedStudies_recruit`.`deletedAt` AS `51c35ec98b92d3f13f048b428103e77aafa460b7`, 
      `User__User_ownedStudies__User__User_ownedStudies_recruit`.`id` AS `User__User_ownedStudies__User__User_ownedStudies_recruit_id`,
      `User__User_ownedStudies__User__User_ownedStudies_recruit`.`title` AS `User__User_ownedStudies__User__User_ownedStudies_recruit_title`,
      `User__User_ownedStudies__User__User_ownedStudies_recruit`.`isRecruit` AS `57add15e3bebcca3ef07fa7f8a60b261053f7a13`, 
      `User__User_ownedStudies__User__User_ownedStudies_recruit`.`recruitPlaceholder` AS `4519d13a0ac7879d93b01b8b57a7c31b8db6f6d5`, 
      `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`createdAt` AS `2fac8123afdf207aecf1b8902890a24ee9714596`, 
      `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`updatedAt` AS `4e1167d66c15b86c99bfeb0617c8ed7e9104678b`, 
      `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`deletedAt` AS `077cccb571709c00678675acdebb7fa4b0098393`, 
      `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`id` AS `User__User_ownedStudies__User__User_ownedStudies_techStacks_id`, 
      `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`stackName` AS `044b5da99d1833c66ca549cd093b2fd5567e78d0`, 
      `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`stackImg` AS `835c629eb6ae2efdd4945161e2331447f43e6884`, 
      `User__User_inquiries__User__User_inquiries_inquiryResponse`.`createdAt` AS `45583516e0cab653769a98bbf1258d05554c1b7e`, 
      `User__User_inquiries__User__User_inquiries_inquiryResponse`.`updatedAt` AS `f4fdf059ae4eb422b0ef88e6ee68618cc0f0f8ec`, 
      `User__User_inquiries__User__User_inquiries_inquiryResponse`.`deletedAt` AS `81448ff5030c860f77aa094fae5aea5936f2eb10`, 
      `User__User_inquiries__User__User_inquiries_inquiryResponse`.`id` AS `User__User_inquiries__User__User_inquiries_inquiryResponse_id`, 
      `User__User_inquiries__User__User_inquiries_inquiryResponse`.`contents` AS `2d7c32f4745d2042a58aa2dc2e5e94418e2eec20`, 
      `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`createdAt` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_createdAt`, 
      `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`updatedAt` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_updatedAt`, 
      `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`deletedAt` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_deletedAt`, 
      `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`id` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_id`, 
      `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`title` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_title`, 
      `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`isRecruit` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_isRecruit`, 
      `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`recruitPlaceholder` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_recruitPlaceholder`, 
      `953cc1db18c8063e17e08202e465c9493fee320e`.`createdAt` AS `953cc1db18c8063e17e08202e465c9493fee320e_createdAt`,
      `953cc1db18c8063e17e08202e465c9493fee320e`.`updatedAt` AS `953cc1db18c8063e17e08202e465c9493fee320e_updatedAt`, 
      `953cc1db18c8063e17e08202e465c9493fee320e`.`deletedAt` AS `953cc1db18c8063e17e08202e465c9493fee320e_deletedAt`,
      `953cc1db18c8063e17e08202e465c9493fee320e`.`id` AS `953cc1db18c8063e17e08202e465c9493fee320e_id`, 
      `953cc1db18c8063e17e08202e465c9493fee320e`.`stackName` AS `953cc1db18c8063e17e08202e465c9493fee320e_stackName`, 
      `953cc1db18c8063e17e08202e465c9493fee320e`.`stackImg` AS `953cc1db18c8063e17e08202e465c9493fee320e_stackImg`, 
      `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`createdAt` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_createdAt`, 
      `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`updatedAt` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_updatedAt`, 
      `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`deletedAt` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_deletedAt`, 
      `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`id` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_id`, 
      `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`title` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_title`, 
      `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`isRecruit` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_isRecruit`, 
      `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`recruitPlaceholder` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_recruitPlaceholder`, 
      `ba2715873ec99995c1f47471bc364d2173536e3a`.`createdAt` AS `ba2715873ec99995c1f47471bc364d2173536e3a_createdAt`, 
      `ba2715873ec99995c1f47471bc364d2173536e3a`.`updatedAt` AS `ba2715873ec99995c1f47471bc364d2173536e3a_updatedAt`, 
      `ba2715873ec99995c1f47471bc364d2173536e3a`.`deletedAt` AS `ba2715873ec99995c1f47471bc364d2173536e3a_deletedAt`, 
      `ba2715873ec99995c1f47471bc364d2173536e3a`.`id` AS `ba2715873ec99995c1f47471bc364d2173536e3a_id`, 
      `ba2715873ec99995c1f47471bc364d2173536e3a`.`stackName` AS `ba2715873ec99995c1f47471bc364d2173536e3a_stackName`, 
      `ba2715873ec99995c1f47471bc364d2173536e3a`.`stackImg` AS `ba2715873ec99995c1f47471bc364d2173536e3a_stackImg`, 
      `User__profile`.`createdAt` AS `User__profile_createdAt`, 
      `User__profile`.`updatedAt` AS `User__profile_updatedAt`, 
      `User__profile`.`deletedAt` AS `User__profile_deletedAt`, 
      `User__profile`.`id` AS `User__profile_id`, 
      `User__profile`.`nickname` AS `User__profile_nickname`, 
      `User__profile`.`profileImg` AS `User__profile_profileImg`, 
      `User__profile`.`gender` AS `User__profile_gender` 
    FROM 
      `user` `User` 
        LEFT JOIN `dev_career` `User__User_devCareer` ON `User__User_devCareer`.`id`=`User`.`devCareerId` AND (`User__User_devCareer`.`deletedAt` IS NULL)  
        LEFT JOIN `job` `User__User_job` ON `User__User_job`.`id`=`User`.`jobId` AND (`User__User_job`.`deletedAt` IS NULL)  
        LEFT JOIN `profile` `User__User_profile` ON `User__User_profile`.`id`=`User`.`profileId` AND (`User__User_profile`.`deletedAt` IS NULL)  
        LEFT JOIN `user_tech_stacks` `User_User__User_techStacks` ON `User_User__User_techStacks`.`userId`=`User`.`id` 
        LEFT JOIN `tech_stack` `User__User_techStacks` ON `User__User_techStacks`.`id`=`User_User__User_techStacks`.`techStackId` AND (`User__User_techStacks`.`deletedAt` IS NULL)  
        LEFT JOIN `study` `User__User_ownedStudies` ON `User__User_ownedStudies`.`ownerId`=`User`.`id` AND (`User__User_ownedStudies`.`deletedAt` IS NULL)  
        LEFT JOIN `inquiry` `User__User_inquiries` ON `User__User_inquiries`.`userId`=`User`.`id` AND (`User__User_inquiries`.`deletedAt` IS NULL)  
        LEFT JOIN `participating_studies` `User_User__User_participatingStudies` ON `User_User__User_participatingStudies`.`userId`=`User`.`id` 
        LEFT JOIN `study` `User__User_participatingStudies` ON `User__User_participatingStudies`.`id`=`User_User__User_participatingStudies`.`studyId` AND (`User__User_participatingStudies`.`deletedAt` IS NULL)  
        LEFT JOIN `bookmarked_studies` `User_User__User_bookmarkedStudies` ON `User_User__User_bookmarkedStudies`.`userId`=`User`.`id` 
        LEFT JOIN `study` `User__User_bookmarkedStudies` ON `User__User_bookmarkedStudies`.`id`=`User_User__User_bookmarkedStudies`.`studyId` AND (`User__User_bookmarkedStudies`.`deletedAt` IS NULL)  
        LEFT JOIN `recruit` `User__User_ownedStudies__User__User_ownedStudies_recruit` ON `User__User_ownedStudies__User__User_ownedStudies_recruit`.`id`=`User__User_ownedStudies`.`recruitId` AND (`User__User_ownedStudies__User__User_ownedStudies_recruit`.`deletedAt` IS NULL)  
        LEFT JOIN `study_tech_stacks` `27012269e041af473089ecff92d4e4bcf4e19bc5` ON `27012269e041af473089ecff92d4e4bcf4e19bc5`.`studyId`=`User__User_ownedStudies`.`id` 
        LEFT JOIN `tech_stack` `User__User_ownedStudies__User__User_ownedStudies_techStacks` ON `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`id`=`27012269e041af473089ecff92d4e4bcf4e19bc5`.`techStackId` AND (`User__User_ownedStudies__User__User_ownedStudies_techStacks`.`deletedAt` IS NULL)  
        LEFT JOIN `inquiry_response` `User__User_inquiries__User__User_inquiries_inquiryResponse` ON `User__User_inquiries__User__User_inquiries_inquiryResponse`.`id`=`User__User_inquiries`.`inquiryResponseId` AND (`User__User_inquiries__User__User_inquiries_inquiryResponse`.`deletedAt` IS NULL)  
        LEFT JOIN `recruit` `2e3ee0d1ca09301cc1dbc9829c287faf926821b5` ON `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`id`=`User__User_participatingStudies`.`recruitId` AND (`2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`deletedAt` IS NULL)  
        LEFT JOIN `study_tech_stacks` `b284e316b9700c2b622eb37da10cb77e9809ba4b` ON `b284e316b9700c2b622eb37da10cb77e9809ba4b`.`studyId`=`User__User_participatingStudies`.`id` 
        LEFT JOIN `tech_stack` `953cc1db18c8063e17e08202e465c9493fee320e` ON `953cc1db18c8063e17e08202e465c9493fee320e`.`id`=`b284e316b9700c2b622eb37da10cb77e9809ba4b`.`techStackId` AND (`953cc1db18c8063e17e08202e465c9493fee320e`.`deletedAt` IS NULL) 
        LEFT JOIN `recruit` `e851240e18c336d6fc494c26ea96d2ee4bd8185f` ON `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`id`=`User__User_bookmarkedStudies`.`recruitId` AND (`e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`deletedAt` IS NULL)  
        LEFT JOIN `study_tech_stacks` `a482b39e7584bbb64379fb159eb9296625ad1e1a` ON `a482b39e7584bbb64379fb159eb9296625ad1e1a`.`studyId`=`User__User_bookmarkedStudies`.`id` 
        LEFT JOIN `tech_stack` `ba2715873ec99995c1f47471bc364d2173536e3a` ON `ba2715873ec99995c1f47471bc364d2173536e3a`.`id`=`a482b39e7584bbb64379fb159eb9296625ad1e1a`.`techStackId` AND (`ba2715873ec99995c1f47471bc364d2173536e3a`.`deletedAt` IS NULL) 
        LEFT JOIN `profile` `User__profile` ON `User__profile`.`id`=`User`.`profileId` AND (`User__profile`.`deletedAt` IS NULL) 
    WHERE ( ((`User`.`id` = ?) OR (`User`.`email` = ?)) ) AND ( `User`.`deletedAt` IS NULL )) `distinctAlias` 
    ORDER BY `User_id` 
    ASC LIMIT 1 -- PARAMETERS: ["ttt123@naver.com","ttt123@naver.com"]


-- 2023-11-20 15:06:01 query: 
SELECT 
  `User`.`createdAt` AS `User_createdAt`, 
  `User`.`updatedAt` AS `User_updatedAt`, 
  `User`.`deletedAt` AS `User_deletedAt`, 
  `User`.`id` AS `User_id`, `User`.`email` AS `User_email`, 
  `User`.`password` AS `User_password`, 
  `User`.`emailVerified` AS `User_emailVerified`, 
  `User`.`profileId` AS `User_profileId`, 
  `User`.`jobId` AS `User_jobId`, 
  `User`.`devCareerId` AS `User_devCareerId`, 
  `User__User_devCareer`.`createdAt` AS `User__User_devCareer_createdAt`, 
  `User__User_devCareer`.`updatedAt` AS `User__User_devCareer_updatedAt`, 
  `User__User_devCareer`.`deletedAt` AS `User__User_devCareer_deletedAt`, 
  `User__User_devCareer`.`id` AS `User__User_devCareer_id`, 
  `User__User_devCareer`.`category` AS `User__User_devCareer_category`, 
  `User__User_job`.`createdAt` AS `User__User_job_createdAt`, 
  `User__User_job`.`updatedAt` AS `User__User_job_updatedAt`, 
  `User__User_job`.`deletedAt` AS `User__User_job_deletedAt`, 
  `User__User_job`.`id` AS `User__User_job_id`, `User__User_job`.`category` AS `User__User_job_category`, 
  `User__User_profile`.`createdAt` AS `User__User_profile_createdAt`, 
  `User__User_profile`.`updatedAt` AS `User__User_profile_updatedAt`, 
  `User__User_profile`.`deletedAt` AS `User__User_profile_deletedAt`, 
  `User__User_profile`.`id` AS `User__User_profile_id`,
  `User__User_profile`.`nickname` AS `User__User_profile_nickname`,
  `User__User_profile`.`profileImg` AS `User__User_profile_profileImg`, 
  `User__User_profile`.`gender` AS `User__User_profile_gender`, 
  `User__User_techStacks`.`createdAt` AS `User__User_techStacks_createdAt`, 
  `User__User_techStacks`.`updatedAt` AS `User__User_techStacks_updatedAt`, 
  `User__User_techStacks`.`deletedAt` AS `User__User_techStacks_deletedAt`, 
  `User__User_techStacks`.`id` AS `User__User_techStacks_id`, 
  `User__User_techStacks`.`stackName` AS `User__User_techStacks_stackName`, 
  `User__User_techStacks`.`stackImg` AS `User__User_techStacks_stackImg`, 
  `User__User_ownedStudies`.`createdAt` AS `User__User_ownedStudies_createdAt`, 
  `User__User_ownedStudies`.`updatedAt` AS `User__User_ownedStudies_updatedAt`, 
  `User__User_ownedStudies`.`deletedAt` AS `User__User_ownedStudies_deletedAt`, 
  `User__User_ownedStudies`.`id` AS `User__User_ownedStudies_id`,
  `User__User_ownedStudies`.`name` AS `User__User_ownedStudies_name`, 
  `User__User_ownedStudies`.`content` AS `User__User_ownedStudies_content`, 
  `User__User_ownedStudies`.`attendantsLimit` AS `User__User_ownedStudies_attendantsLimit`, 
  `User__User_ownedStudies`.`startDate` AS `User__User_ownedStudies_startDate`, 
  `User__User_ownedStudies`.`endDate` AS `User__User_ownedStudies_endDate`, 
  `User__User_ownedStudies`.`recruitId` AS `User__User_ownedStudies_recruitId`, 
  `User__User_ownedStudies`.`ownerId` AS `User__User_ownedStudies_ownerId`, 
  `User__User_inquiries`.`createdAt` AS `User__User_inquiries_createdAt`, 
  `User__User_inquiries`.`updatedAt` AS `User__User_inquiries_updatedAt`, 
  `User__User_inquiries`.`deletedAt` AS `User__User_inquiries_deletedAt`, 
  `User__User_inquiries`.`id` AS `User__User_inquiries_id`, 
  `User__User_inquiries`.`title` AS `User__User_inquiries_title`, 
  `User__User_inquiries`.`contents` AS `User__User_inquiries_contents`, 
  `User__User_inquiries`.`inquiryResponseId` AS `User__User_inquiries_inquiryResponseId`, 
  `User__User_inquiries`.`userId` AS `User__User_inquiries_userId`, 
  `User__User_inquiries`.`studyId` AS `User__User_inquiries_studyId`,
  `User__User_participatingStudies`.`createdAt` AS `User__User_participatingStudies_createdAt`, 
  `User__User_participatingStudies`.`updatedAt` AS `User__User_participatingStudies_updatedAt`, 
  `User__User_participatingStudies`.`deletedAt` AS `User__User_participatingStudies_deletedAt`, 
  `User__User_participatingStudies`.`id` AS `User__User_participatingStudies_id`, 
  `User__User_participatingStudies`.`name` AS `User__User_participatingStudies_name`, 
  `User__User_participatingStudies`.`content` AS `User__User_participatingStudies_content`, 
  `User__User_participatingStudies`.`attendantsLimit` AS `User__User_participatingStudies_attendantsLimit`, 
  `User__User_participatingStudies`.`startDate` AS `User__User_participatingStudies_startDate`, 
  `User__User_participatingStudies`.`endDate` AS `User__User_participatingStudies_endDate`, 
  `User__User_participatingStudies`.`recruitId` AS `User__User_participatingStudies_recruitId`,
  `User__User_participatingStudies`.`ownerId` AS `User__User_participatingStudies_ownerId`,
  `User__User_bookmarkedStudies`.`createdAt` AS `User__User_bookmarkedStudies_createdAt`, 
  `User__User_bookmarkedStudies`.`updatedAt` AS `User__User_bookmarkedStudies_updatedAt`, 
  `User__User_bookmarkedStudies`.`deletedAt` AS `User__User_bookmarkedStudies_deletedAt`, 
  `User__User_bookmarkedStudies`.`id` AS `User__User_bookmarkedStudies_id`, 
  `User__User_bookmarkedStudies`.`name` AS `User__User_bookmarkedStudies_name`, 
  `User__User_bookmarkedStudies`.`content` AS `User__User_bookmarkedStudies_content`, 
  `User__User_bookmarkedStudies`.`attendantsLimit` AS `User__User_bookmarkedStudies_attendantsLimit`, 
  `User__User_bookmarkedStudies`.`startDate` AS `User__User_bookmarkedStudies_startDate`, 
  `User__User_bookmarkedStudies`.`endDate` AS `User__User_bookmarkedStudies_endDate`, 
  `User__User_bookmarkedStudies`.`recruitId` AS `User__User_bookmarkedStudies_recruitId`,
  `User__User_bookmarkedStudies`.`ownerId` AS `User__User_bookmarkedStudies_ownerId`,
  `User__User_ownedStudies__User__User_ownedStudies_recruit`.`createdAt` AS `550620ad1e1e2c864a2589796ec6da4d91555d5c`, 
  `User__User_ownedStudies__User__User_ownedStudies_recruit`.`updatedAt` AS `eae23ee0d543131f5382d8693295b02c47873cff`, 
  `User__User_ownedStudies__User__User_ownedStudies_recruit`.`deletedAt` AS `51c35ec98b92d3f13f048b428103e77aafa460b7`, 
  `User__User_ownedStudies__User__User_ownedStudies_recruit`.`id` AS `User__User_ownedStudies__User__User_ownedStudies_recruit_id`, 
  `User__User_ownedStudies__User__User_ownedStudies_recruit`.`title` AS `User__User_ownedStudies__User__User_ownedStudies_recruit_title`, 
  `User__User_ownedStudies__User__User_ownedStudies_recruit`.`isRecruit` AS `57add15e3bebcca3ef07fa7f8a60b261053f7a13`, 
  `User__User_ownedStudies__User__User_ownedStudies_recruit`.`recruitPlaceholder` AS `4519d13a0ac7879d93b01b8b57a7c31b8db6f6d5`, 
  `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`createdAt` AS `2fac8123afdf207aecf1b8902890a24ee9714596`,
  `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`updatedAt` AS `4e1167d66c15b86c99bfeb0617c8ed7e9104678b`, 
  `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`deletedAt` AS `077cccb571709c00678675acdebb7fa4b0098393`, 
  `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`id` AS `User__User_ownedStudies__User__User_ownedStudies_techStacks_id`, 
  `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`stackName` AS `044b5da99d1833c66ca549cd093b2fd5567e78d0`, 
  `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`stackImg` AS `835c629eb6ae2efdd4945161e2331447f43e6884`, 
  `User__User_inquiries__User__User_inquiries_inquiryResponse`.`createdAt` AS `45583516e0cab653769a98bbf1258d05554c1b7e`, 
  `User__User_inquiries__User__User_inquiries_inquiryResponse`.`updatedAt` AS `f4fdf059ae4eb422b0ef88e6ee68618cc0f0f8ec`, 
  `User__User_inquiries__User__User_inquiries_inquiryResponse`.`deletedAt` AS `81448ff5030c860f77aa094fae5aea5936f2eb10`, 
  `User__User_inquiries__User__User_inquiries_inquiryResponse`.`id` AS `User__User_inquiries__User__User_inquiries_inquiryResponse_id`, 
  `User__User_inquiries__User__User_inquiries_inquiryResponse`.`contents` AS `2d7c32f4745d2042a58aa2dc2e5e94418e2eec20`, 
  `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`createdAt` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_createdAt`, 
  `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`updatedAt` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_updatedAt`, 
  `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`deletedAt` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_deletedAt`, 
  `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`id` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_id`, 
  `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`title` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_title`, 
  `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`isRecruit` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_isRecruit`, 
  `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`recruitPlaceholder` AS `2e3ee0d1ca09301cc1dbc9829c287faf926821b5_recruitPlaceholder`, 
  `953cc1db18c8063e17e08202e465c9493fee320e`.`createdAt` AS `953cc1db18c8063e17e08202e465c9493fee320e_createdAt`, 
  `953cc1db18c8063e17e08202e465c9493fee320e`.`updatedAt` AS `953cc1db18c8063e17e08202e465c9493fee320e_updatedAt`, 
  `953cc1db18c8063e17e08202e465c9493fee320e`.`deletedAt` AS `953cc1db18c8063e17e08202e465c9493fee320e_deletedAt`, 
  `953cc1db18c8063e17e08202e465c9493fee320e`.`id` AS `953cc1db18c8063e17e08202e465c9493fee320e_id`, 
  `953cc1db18c8063e17e08202e465c9493fee320e`.`stackName` AS `953cc1db18c8063e17e08202e465c9493fee320e_stackName`, 
  `953cc1db18c8063e17e08202e465c9493fee320e`.`stackImg` AS `953cc1db18c8063e17e08202e465c9493fee320e_stackImg`, 
  `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`createdAt` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_createdAt`, 
  `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`updatedAt` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_updatedAt`, 
  `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`deletedAt` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_deletedAt`, 
  `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`id` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_id`, 
  `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`title` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_title`, 
  `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`isRecruit` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_isRecruit`, 
  `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`recruitPlaceholder` AS `e851240e18c336d6fc494c26ea96d2ee4bd8185f_recruitPlaceholder`, 
  `ba2715873ec99995c1f47471bc364d2173536e3a`.`createdAt` AS `ba2715873ec99995c1f47471bc364d2173536e3a_createdAt`, 
  `ba2715873ec99995c1f47471bc364d2173536e3a`.`updatedAt` AS `ba2715873ec99995c1f47471bc364d2173536e3a_updatedAt`, 
  `ba2715873ec99995c1f47471bc364d2173536e3a`.`deletedAt` AS `ba2715873ec99995c1f47471bc364d2173536e3a_deletedAt`, 
  `ba2715873ec99995c1f47471bc364d2173536e3a`.`id` AS `ba2715873ec99995c1f47471bc364d2173536e3a_id`, 
  `ba2715873ec99995c1f47471bc364d2173536e3a`.`stackName` AS `ba2715873ec99995c1f47471bc364d2173536e3a_stackName`, 
  `ba2715873ec99995c1f47471bc364d2173536e3a`.`stackImg` AS `ba2715873ec99995c1f47471bc364d2173536e3a_stackImg`, 
  `User__profile`.`createdAt` AS `User__profile_createdAt`, `User__profile`.`updatedAt` AS `User__profile_updatedAt`, 
  `User__profile`.`deletedAt` AS `User__profile_deletedAt`, `User__profile`.`id` AS `User__profile_id`, `User__profile`.`nickname` AS `User__profile_nickname`, 
  `User__profile`.`profileImg` AS `User__profile_profileImg`, `User__profile`.`gender` AS `User__profile_gender` 
FROM 
  `user` `User` 
    LEFT JOIN `dev_career` `User__User_devCareer` ON `User__User_devCareer`.`id`=`User`.`devCareerId` AND (`User__User_devCareer`.`deletedAt` IS NULL)  
    LEFT JOIN `job` `User__User_job` ON `User__User_job`.`id`=`User`.`jobId` AND (`User__User_job`.`deletedAt` IS NULL)  
    LEFT JOIN `profile` `User__User_profile` ON `User__User_profile`.`id`=`User`.`profileId` AND (`User__User_profile`.`deletedAt` IS NULL)  
    LEFT JOIN `user_tech_stacks` `User_User__User_techStacks` ON `User_User__User_techStacks`.`userId`=`User`.`id` 
    LEFT JOIN `tech_stack` `User__User_techStacks` ON `User__User_techStacks`.`id`=`User_User__User_techStacks`.`techStackId` AND (`User__User_techStacks`.`deletedAt` IS NULL)  
    LEFT JOIN `study` `User__User_ownedStudies` ON `User__User_ownedStudies`.`ownerId`=`User`.`id` AND (`User__User_ownedStudies`.`deletedAt` IS NULL)  
    LEFT JOIN `inquiry` `User__User_inquiries` ON `User__User_inquiries`.`userId`=`User`.`id` AND (`User__User_inquiries`.`deletedAt` IS NULL)  
    LEFT JOIN `participating_studies` `User_User__User_participatingStudies` ON `User_User__User_participatingStudies`.`userId`=`User`.`id` 
    LEFT JOIN `study` `User__User_participatingStudies` ON `User__User_participatingStudies`.`id`=`User_User__User_participatingStudies`.`studyId` AND (`User__User_participatingStudies`.`deletedAt` IS NULL)  
    LEFT JOIN `bookmarked_studies` `User_User__User_bookmarkedStudies` ON `User_User__User_bookmarkedStudies`.`userId`=`User`.`id` 
    LEFT JOIN `study` `User__User_bookmarkedStudies` ON `User__User_bookmarkedStudies`.`id`=`User_User__User_bookmarkedStudies`.`studyId` AND (`User__User_bookmarkedStudies`.`deletedAt` IS NULL)  
    LEFT JOIN `recruit` `User__User_ownedStudies__User__User_ownedStudies_recruit` ON `User__User_ownedStudies__User__User_ownedStudies_recruit`.`id`=`User__User_ownedStudies`.`recruitId` AND (`User__User_ownedStudies__User__User_ownedStudies_recruit`.`deletedAt` IS NULL) 
    LEFT JOIN `study_tech_stacks` `27012269e041af473089ecff92d4e4bcf4e19bc5` ON `27012269e041af473089ecff92d4e4bcf4e19bc5`.`studyId`=`User__User_ownedStudies`.`id` 
    LEFT JOIN `tech_stack` `User__User_ownedStudies__User__User_ownedStudies_techStacks` ON `User__User_ownedStudies__User__User_ownedStudies_techStacks`.`id`=`27012269e041af473089ecff92d4e4bcf4e19bc5`.`techStackId` AND (`User__User_ownedStudies__User__User_ownedStudies_techStacks`.`deletedAt` IS NULL)  
    LEFT JOIN `inquiry_response` `User__User_inquiries__User__User_inquiries_inquiryResponse` ON `User__User_inquiries__User__User_inquiries_inquiryResponse`.`id`=`User__User_inquiries`.`inquiryResponseId` AND (`User__User_inquiries__User__User_inquiries_inquiryResponse`.`deletedAt` IS NULL)  
    LEFT JOIN `recruit` `2e3ee0d1ca09301cc1dbc9829c287faf926821b5` ON `2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`id`=`User__User_participatingStudies`.`recruitId` AND (`2e3ee0d1ca09301cc1dbc9829c287faf926821b5`.`deletedAt` IS NULL)  
    LEFT JOIN `study_tech_stacks` `b284e316b9700c2b622eb37da10cb77e9809ba4b` ON `b284e316b9700c2b622eb37da10cb77e9809ba4b`.`studyId`=`User__User_participatingStudies`.`id` 
    LEFT JOIN `tech_stack` `953cc1db18c8063e17e08202e465c9493fee320e` ON `953cc1db18c8063e17e08202e465c9493fee320e`.`id`=`b284e316b9700c2b622eb37da10cb77e9809ba4b`.`techStackId` AND (`953cc1db18c8063e17e08202e465c9493fee320e`.`deletedAt` IS NULL)  
    LEFT JOIN `recruit` `e851240e18c336d6fc494c26ea96d2ee4bd8185f` ON `e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`id`=`User__User_bookmarkedStudies`.`recruitId` AND (`e851240e18c336d6fc494c26ea96d2ee4bd8185f`.`deletedAt` IS NULL)  
    LEFT JOIN `study_tech_stacks` `a482b39e7584bbb64379fb159eb9296625ad1e1a` ON `a482b39e7584bbb64379fb159eb9296625ad1e1a`.`studyId`=`User__User_bookmarkedStudies`.`id` 
    LEFT JOIN `tech_stack` `ba2715873ec99995c1f47471bc364d2173536e3a` ON `ba2715873ec99995c1f47471bc364d2173536e3a`.`id`=`a482b39e7584bbb64379fb159eb9296625ad1e1a`.`techStackId` AND (`ba2715873ec99995c1f47471bc364d2173536e3a`.`deletedAt` IS NULL)  
    LEFT JOIN `profile` `User__profile` ON `User__profile`.`id`=`User`.`profileId` AND (`User__profile`.`deletedAt` IS NULL)
WHERE 
  ( ((`User`.`id` = ?) OR (`User`.`email` = ?)) ) 
    AND ( `User`.`deletedAt` IS NULL ) 
    AND ( `User`.`id` IN (?) ) 
-- PARAMETERS: ["ttt123@naver.com","ttt123@naver.com","117c62d0-30f3-4c86-b441-af9bf70b2304"]