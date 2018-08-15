// Copyright (c) Microsoft. All rights reserved.

import { toDiagnosticsModel } from 'services/models';

export const toLogRuleModel = (eventName, rule) =>
{
  var metadata = {
    DeviceGroup: rule.groupId,
    Calculation : rule.calculation,
    TimePeriod: rule.timePeriod,
    SeverityLevel: rule.severity,
    ConditionCount: rule.conditions.length,
    FirstFieldChosen: rule.conditions[0].field,
    FirstOperatorChosen: rule.conditions[0].operator
  };

  return toDiagnosticsModel(eventName, metadata);
}

export const toSinglePropertyLogModel = (eventName, propertyTitle, property) => {
  var metadata = {};
  metadata[propertyTitle] = property;
  return toDiagnosticsModel(eventName, metadata);
}
