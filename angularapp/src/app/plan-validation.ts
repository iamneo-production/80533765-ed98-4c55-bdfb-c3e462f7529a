import { AbstractControl } from "@angular/forms";

export const planDescriptionPatterns = [
  { pattern: /^(\d+(\.\d+)? GB per day)$/i, identifier: 'GB per day' },
  { pattern: /^(\d+ SMS per day)$/i, identifier: 'SMS per day' },
  { pattern: /^(Weekend Rollover)$/i, identifier: 'Weekend Rollover' },
  { pattern: /^(Data Delight Packs)$/i, identifier: 'Data Delight Packs' },
  { pattern: /^(Unlimited TalkTime \+ \d+GB Data)$/i, identifier: 'Unlimited TalkTime + GB Data' },
  { pattern: /^(Family Sharing Plan)$/i, identifier: 'Family Sharing Plan' },
  { pattern: /^(International Roaming Pack)$/i, identifier: 'International Roaming Pack' },
  { pattern: /^(Student Special Plan)$/i, identifier: 'Student Special Plan' },
  { pattern: /^(Business Premium Plan)$/i, identifier: 'Business Premium Plan' }
];

export function planDescriptionValidator() {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    // Remove extra spaces and convert to lowercase
    const cleanedValue = value.trim().toLowerCase();

    // Loop through the array of regular expressions with identifiers
    for (const patternObj of planDescriptionPatterns) {
      if (patternObj.pattern.test(cleanedValue)) {
        return null; // Valid
      }
    }

    return { invalidDescription: true, matchedPatterns: planDescriptionPatterns };
  };
}
export const AddonDescriptionPatterns = [
  { pattern: /^\d+(\.\d+)?\s?GB$/i, identifier: 'GB' },
];

export function AddonDescriptionValidator() {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    // Remove extra spaces and convert to lowercase
    const cleanedValue = value.trim().toLowerCase();

    // Loop through the array of regular expressions with identifiers
    for (const patternObj of AddonDescriptionPatterns) {
      if (patternObj.pattern.test(cleanedValue)) {
        return null; // Valid
      }
    }

    return { invalidDescription: true, allowedPattern: 'GB' };
  };
}
