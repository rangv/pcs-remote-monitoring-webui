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

export const toRuleStatusModel = (eventName, ruleStatusValue) => {
  var metadata = {
    RuleStatus: ruleStatusValue
  };

  return toDiagnosticsModel(eventName, metadata);
}

export const toSeverityModel = (eventName, severityLevelValue) => {
  var metadata = {
    SeverityLevel: severityLevelValue
  };

  return toDiagnosticsModel(eventName, metadata);
};

export const toOperatorChosenModel = (
    eventName,
    operatorChosenValue,
    conditionNumberValue) => {
  var metadata = {
    OperatorChosen: operatorChosenValue,
    ConditionNumber: conditionNumberValue,
  };

  return toDiagnosticsModel(eventName, metadata);
};

export const toFieldChosenModel = (
    eventName,
    fieldChosenValue,
    conditionNumberValue) => {
  var metadata = {
    FieldChosen: fieldChosenValue,
    ConditionNumber: conditionNumberValue
  };

  return toDiagnosticsModel(eventName, metadata);
};

export const toCalculationModel = (eventName, calculationType) => {
  var metadata = {
    Calculation: calculationType
  };

  return toDiagnosticsModel(eventName, metadata);
};

export const toDeviceGroupModel = (eventName, deviceGroupName) => {
  var metadata = {
    DeviceGroup: deviceGroupName
  };

  return toDiagnosticsModel(eventName, metadata);
};
