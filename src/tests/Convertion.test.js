import { convertDMStoDD, convertDDtoDMS } from '../utils/Convertion'
import { describe, test, expect } from '@jest/globals';

describe('convertDMStoDD', () => {
    test('should correctly convert DMS to DD for northern and eastern hemispheres', () => {
        expect(convertDMStoDD(40, 30, 0, 'N')).toBeCloseTo(40.5);
        expect(convertDMStoDD(120, 15, 0, 'E')).toBeCloseTo(120.25);
    });

    test('should correctly convert DMS to DD for southern and western hemispheres', () => {
        expect(convertDMStoDD(40, 30, 0, 'S')).toBeCloseTo(-40.5);
        expect(convertDMStoDD(120, 15, 0, 'W')).toBeCloseTo(-120.25);
    });
});

describe('convertDDtoDMS', () => {
    test('should correctly convert DD to DMS for positive values', () => {
        expect(convertDDtoDMS(40.5)).toEqual({ degrees: 40, minutes: 30, seconds: "0.00" });
        expect(convertDDtoDMS(120.25)).toEqual({ degrees: 120, minutes: 15, seconds: "0.00" });
    });

    test('should correctly convert DD to DMS for negative values', () => {
        expect(convertDDtoDMS(-40.5)).toEqual({ degrees: -40, minutes: 30, seconds: "0.00" });
        expect(convertDDtoDMS(-120.25)).toEqual({ degrees: -120, minutes: 15, seconds: "0.00" });
    });
});
