/*
 * Copyright (C) 2016 TopCoder Inc., All Rights Reserved.
 */

/**
 * The default configuration file
 * @author TCSCODER
 * @version 1.0
 */

// only fields that need to be overwritten should go here
module.exports = {
  LOG_LEVEL: 'LOG_LEVEL',
  CAPTURE_LOGS: 'CAPTURE_LOGS',
  LOGENTRIES_TOKEN: 'LOGENTRIES_TOKEN',

  RABBITMQ: {
    URL: 'RABBITMQ_URL',
  },
  TC_SLACK_WEBHOOK_URL: 'TC_SLACK_WEBHOOK_URL',
  SYSTEM_USER_CLIENT_ID: 'SYSTEM_USER_CLIENT_ID',
  SYSTEM_USER_CLIENT_SECRET: 'SYSTEM_USER_CLIENT_SECRET',
};
