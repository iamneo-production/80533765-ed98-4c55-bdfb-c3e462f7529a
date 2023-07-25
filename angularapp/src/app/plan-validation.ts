import { AbstractControl } from "@angular/forms";

export const planDescriptionPatterns = [
    { pattern: /^(\d+(\.\d+)?\s?GB\s?per\s?day)$/i, identifier: 'GB per day' },
    { pattern: /^(\d+\s?SMS\s?per\s?day)$/i, identifier: 'SMS per day' },
    { pattern: /^(Weekend\s?Rollover)$/i, identifier: 'Weekend Rollover' },
    { pattern: /^(Data\s?Delight\s?Packs)$/i, identifier: 'Data Delight Packs' },
    { pattern: /^(Unlimited\s?TalkTime\s?\+\s?\d+GB\s?Data)$/i, identifier: 'Unlimited TalkTime + GB Data' },
    { pattern: /^(Family\s?Sharing\s?Plan)$/i, identifier: 'Family Sharing Plan' },
    { pattern: /^(International\s?Roaming\s?Pack)$/i, identifier: 'International Roaming Pack' },
    { pattern: /^(Student\s?Special\s?Plan)$/i, identifier: 'Student Special Plan' },
    { pattern: /^(Business\s?Premium\s?Plan)$/i, identifier: 'Business Premium Plan' }
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
  