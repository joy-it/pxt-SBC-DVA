/**
  * Enumeration of the ina236 modes
  */
enum ina236Mode {
    //% block="Shutdown"
    Zero,
    //% block="Shunt triggered, single shot"
    One,
    //% block="Bus triggered, single shot"
    Two,
    //% block="Shunt and Bus triggered, single shot"
    Three,
    //% block="Shutdown"
    Four,
    //% block="Continuous Shunt voltage"
    Five,
    //% block="Continuous Bus voltage"
    Six,
    //% block="Continuous Shunt and Bus voltage"
    Seven
}

/**
  * Enumeration of the ina236 conversion time for the Shunt measurement
  */
enum ina236Vshct {
    //% block="140us"
    Zero,
    //% block="204us"
    One,
    //% block="332us"
    Two,
    //% block="588us"
    Three,
    //% block="1100us"
    Four,
    //% block="2116us"
    Five,
    //% block="4156us"
    Six,
    //% block="8244us"
    Seven
}

/**
  * Enumeration of the ina236 conversion time for the VBUS measurement
  */
enum ina236Vbusct {
    //% block="140us"
    Zero,
    //% block="204us"
    One,
    //% block="332us"
    Two,
    //% block="588us"
    Three,
    //% block="1100us"
    Four,
    //% block="2116us"
    Five,
    //% block="4156us"
    Six,
    //% block="8244us"
    Seven
}

/**
  * Enumeration of the ina236 ADC values to be averaged
  */
enum ina236Avg {
    //% block="1"
    Zero,
    //% block="4"
    One,
    //% block="16"
    Two,
    //% block="64"
    Three,
    //% block="128"
    Four,
    //% block="256"
    Five,
    //% block="512"
    Six,
    //% block="1024"
    Seven
}

/**
  * Enumeration of the ina236 range of the ADC
  */
enum ina236Adcrange {
    //% block="±81.92mV"
    Zero,
    //% block="±20.48mV"
    One
}

/**
  * Enumeration of the I2C addresses -Chip version A
  */
enum ina236AddressA {
    //% block="GND_0x40"
    GND,
    //% block="VS_0x41"
    VS,
    //% block="SDA_0x42"
    SDA,
    //% block="SCL_0x43"
    SCL
}

/**
  * Enumeration of the I2C addresses -Chip version B
  */
enum ina236AddressB {
    //% block="GND_0x48"
    GND,
    //% block="VS_0x49"
    VS,
    //% block="SDA_0x4A"
    SDA,
    //% block="SCL_0x4B"
    SCL
}

enum ina236MaskEnable {
    //% block="SOL(Shunt Over-limit)"
    Zero,
    //% block="SUL(Shunt Under-limit)"
    One,
    //% block="BOL(Bus Over-limit)"
    Two,
    //% block="BUL(Bus Under-limit)"
    Three,
    //% block="POL(Power Over-limit)"
    Four,
    //% block="CNVR(Conversion Ready)"
    Five,
    //% block="MemError"
    Six,
    //% block="AFF(Alert Function Flag)"
    Seven,
    //% block="CVRF(Conversion Ready Flag)"
    Eight,
    //% block="OVF(Math Over-flow)"
    Nine
}

/**
  * ina236 High-precision digital I²C monitoring module for current (48 V, 16 bit), with alarm in WCSP
  */
//% color="//275C6B" weight=100 icon="\uf0e7" block="INA236"
namespace INA236 {
    // Address variables ina236A
    const GND_A = 0x40    // 1000000b
    const VS_A = 0x41     // 1000001b
    const SDA_A = 0x42    // 1000010b
    const SCL_A = 0x43    // 1000011b
    // Address variables ina236B
    const GND_B = 0x48    // 1001000b
    const VS_B = 0x49     // 1001001b
    const SDA_B = 0x4A    // 1001010b
    const SCL_B = 0x4B    // 1001011b

    let _ADDRESS_A = [
        GND_A,    // 1000000b
        VS_A,     // 1000001b
        SDA_A,    // 1000010b
        SCL_A    // 1000011b
    ]

    let _ADDRESS_B = [
        GND_B,    // 1001000b
        VS_B,     // 1001001b
        SDA_B,    // 1001010b
        SCL_B    // 1001011b
    ]

    // Register variables
    const Config_Reg = 0x00
    const Shunt_Volt_Reg = 0x01
    const Bus_Volt_Reg = 0x02
    const Power_Reg = 0x03
    const Current_Reg = 0x04
    const Calibration_Reg = 0x05
    const Mask_Enable_Reg = 0x06
    const Alert_Limit_Reg = 0x07
    const Manufacturer_ID_Reg = 0x3E
    const Device_ID_Reg = 0x3F

    // Reset
    const RST = 0x8000

    // Range of the ADC
    const ADCRANGE_1 = 0x0000    // ±81.92mV (default)
    const ADCRANGE_2 = 0x1000    // ±20.48mV

    let _ADCRANGE = [
        ADCRANGE_1,    // ±81.92mV (default)
        ADCRANGE_2     // ±20.48mV
    ]

    // List of voltage values corresponding to the list of _ADCRANGE
    let _LSB = [
        0.0000025,     // Shunt Voltage, ±81.92mV | 2.5uV
        0.000000625,   // Shunt Voltage, ±20.48mV | 625nV
        0.0016         // Bus Voltage | 1.6mV
    ]

    // ADC values to be averaged
    const AVG_1 = 0x0000    // 1 (default)
    const AVG_2 = 0x0200    // 4
    const AVG_3 = 0x0400    // 16
    const AVG_4 = 0x0600    // 64
    const AVG_5 = 0x0800    // 128
    const AVG_6 = 0x0A00    // 256
    const AVG_7 = 0x0C00    // 512
    const AVG_8 = 0x0E00    // 1024

    let _AVG = [
        AVG_1,    // 1(default )
        AVG_2,    // 4
        AVG_3,    // 16
        AVG_4,    // 64
        AVG_5,    // 128
        AVG_6,    // 256
        AVG_7,    // 512
        AVG_8     // 1024
    ]

    // Conversion time for the VBUS measurement
    const VBUSCT_1 = 0x0000    // 140us
    const VBUSCT_2 = 0x0040    // 204us
    const VBUSCT_3 = 0x0080    // 332us
    const VBUSCT_4 = 0x00C0    // 588us
    const VBUSCT_5 = 0x0100    // 1100us (default)
    const VBUSCT_6 = 0x0140    // 2116us
    const VBUSCT_7 = 0x0180    // 4156us
    const VBUSCT_8 = 0x01C0    // 8244us

    let _VBUSCT = [
        VBUSCT_1,    // 140us
        VBUSCT_2,    // 204us
        VBUSCT_3,    // 332us
        VBUSCT_4,    // 588us
        VBUSCT_5,    // 1100us (default)
        VBUSCT_6,    // 2116us
        VBUSCT_7,    // 4156us
        VBUSCT_8     // 8244us
    ]

    // Conversion time for the Shunt measurement
    const VSHCT_1 = 0x0000    // 140us
    const VSHCT_2 = 0x0008    // 204us
    const VSHCT_3 = 0x0010    // 332us
    const VSHCT_4 = 0x0018    // 588us
    const VSHCT_5 = 0x0020    // 1100us (default)
    const VSHCT_6 = 0x0028    // 2116us
    const VSHCT_7 = 0x0030    // 4156us
    const VSHCT_8 = 0x0038    // 8244us

    let _VSHCT = [
        VSHCT_1,    // 140us
        VSHCT_2,    // 204us
        VSHCT_3,    // 332us
        VSHCT_4,    // 588us
        VSHCT_5,    // 1100us (default)
        VSHCT_6,    // 2116us
        VSHCT_7,    // 4156us
        VSHCT_8     // 8244us
    ]

    // Operating Mode
    const MODE_1 = 0x0000    // Shutdown
    const MODE_2 = 0x0001    // Shunt Voltage triggered, single shot
    const MODE_3 = 0x0002    // Bus Voltage triggered, single shot
    const MODE_4 = 0x0003    // Shunt voltage and Bus voltage triggered, single shot
    const MODE_5 = 0x0004    // Shutdown
    const MODE_6 = 0x0005    // Continuous Shunt voltage
    const MODE_7 = 0x0006    // Continuous Bus voltage
    const MODE_8 = 0x0007    // Continuous Shunt and Bus voltage (default)

    let _MODE = [
        MODE_1,    // Shutdown
        MODE_2,    // Shunt Voltage triggered, single shot
        MODE_3,    // Bus Voltage triggered, single shot
        MODE_4,    // Shunt voltage and Bus voltage triggered, single shot
        MODE_5,    // Shutdown
        MODE_6,    // Continuous Shunt voltage
        MODE_7,    // Continuous Bus voltage
        MODE_8     // Continuous Shunt and Bus voltage (default)
    ]

    let _MASK_ENABLE = [
        0x8000,    // SOL(Shunt Over-limit)
        0x4000,    // SUL(Shunt Under-limit) 
        0x2000,    // BOL(Bus Over-limit) 
        0x1000,    // BUL(Bus Under-limit)
        0x0800,    // POL(Power Over-limit)
        0x0400,    // CNVR(Conversion Ready)
        0x0020,    // MemError
        0x0010,    // AFF(Alert Function Flag)
        0x0008,    // CVRF(Conversion Ready Flag)
        0x0004     // OVF(Math Over-flow)
    ]

    let Current_lsb = 0
    let Lsb = _LSB[0]
    let Address = _ADDRESS_A[0]
    let Mode = _MODE[7]
    let Vshct = _VSHCT[4]
    let Vbusct = _VBUSCT[4]
    let Avg = _AVG[0]
    let Adcrange = _ADCRANGE[0]

    // Write the required 16-bit value into the register
    function _write_register(register: number, value: number) {
        let temp: number[] = []
        temp.insertAt(1, (value >> 8) & 0xff)
        temp.insertAt(2, (value & 0xff))
        let num = pins.createBuffer(3)
        num.setNumber(NumberFormat.Int8LE, 0, register)
        num.setNumber(NumberFormat.Int8LE, 1, temp[1])
        num.setNumber(NumberFormat.Int8LE, 2, temp[2])
        pins.i2cWriteBuffer(Address, num, false)
    }

    // Read the 16-bit register value that will be returned
    function _read_register(register: number) {
        pins.i2cWriteNumber(Address, register, NumberFormat.Int8LE, false)
        let result = pins.i2cReadBuffer(Address, 2, false)
        let result1 = result.getNumber(NumberFormat.UInt8LE, 0)
        let result2 = result.getNumber(NumberFormat.UInt8LE, 1)
        return result1 << 8 | result2
    }

    /**
     * Set the mode of the INA236
     */
    //% blockId="INA236_Mode" block="Set the mode of operation to %ina236Mode"
    //% input.defl=ina236Mode.Seven
    //% color="#275C6B" weight=100 blockGap=8
    export function setMode(input: ina236Mode) {
        if (input == ina236Mode.Zero) {
            Mode = _MODE[0]
        }
        else if (input == ina236Mode.One) {
            Mode = _MODE[1]
        }
        else if (input == ina236Mode.Two) {
            Mode = _MODE[2]
        }
        else if (input == ina236Mode.Three) {
            Mode = _MODE[3]
        }
        else if (input == ina236Mode.Four) {
            Mode = _MODE[4]
        }
        else if (input == ina236Mode.Five) {
            Mode = _MODE[5]
        }
        else if (input == ina236Mode.Six) {
            Mode = _MODE[6]
        }
        else if (input == ina236Mode.Seven) {
            Mode = _MODE[7]
        }
    }

    /**
     * Set the conversion time for the Shunt measurement of the INA236
     */
    //% blockId="INA236_VSHCT" block="Set the conversion time for the Shunt measurement to %ina236Vshct"
    //% input.defl=ina236Vshct.Four
    //% color="#275C6B" weight=95 blockGap=8
    export function setVshct(input: ina236Vshct) {
        if (input == ina236Vshct.Zero) {
            Vshct = _VSHCT[0]
        }
        else if (input == ina236Vshct.One) {
            Vshct = _VSHCT[1]
        }
        else if (input == ina236Vshct.Two) {
            Vshct = _VSHCT[2]
        }
        else if (input == ina236Vshct.Three) {
            Vshct = _VSHCT[3]
        }
        else if (input == ina236Vshct.Four) {
            Vshct = _VSHCT[4]
        }
        else if (input == ina236Vshct.Five) {
            Vshct = _VSHCT[5]
        }
        else if (input == ina236Vshct.Six) {
            Vshct = _VSHCT[6]
        }
        else if (input == ina236Vshct.Seven) {
            Vshct = _VSHCT[7]
        }
    }

    /**
     * Set the conversion time for the VBUS measurement of the INA236
     */
    //% blockId="INA236_VBUSCT" block="Set the conversion time for the VBUS measurement to %ina236Vbusct"
    //% input.defl=ina236Vbusct.Four
    //% color="#275C6B" weight=90 blockGap=8
    export function setVbusct(input: ina236Vbusct) {
        if (input == ina236Vbusct.Zero) {
            Vbusct = _VBUSCT[0]
        }
        else if (input == ina236Vbusct.One) {
            Vbusct = _VBUSCT[1]
        }
        else if (input == ina236Vbusct.Two) {
            Vbusct = _VBUSCT[2]
        }
        else if (input == ina236Vbusct.Three) {
            Vbusct = _VBUSCT[3]
        }
        else if (input == ina236Vbusct.Four) {
            Vbusct = _VBUSCT[4]
        }
        else if (input == ina236Vbusct.Five) {
            Vbusct = _VBUSCT[5]
        }
        else if (input == ina236Vbusct.Six) {
            Vbusct = _VBUSCT[6]
        }
        else if (input == ina236Vbusct.Seven) {
            Vbusct = _VBUSCT[7]
        }
    }

    /**
     * Set the amount of ADC values to be averaged of the INA236
     */
    //% blockId="INA236_AVG" block="Set the amount of ADC values to be averaged to %ina236Avg"
    //% input.defl=ina236Avg.Zero
    //% color="#275C6B" weight=85 blockGap=8
    export function setAvg(input: ina236Avg) {
        if (input == ina236Avg.Zero) {
            Avg = _AVG[0]
        }
        else if (input == ina236Avg.One) {
            Avg = _AVG[1]
        }
        else if (input == ina236Avg.Two) {
            Avg = _AVG[2]
        }
        else if (input == ina236Avg.Three) {
            Avg = _AVG[3]
        }
        else if (input == ina236Avg.Four) {
            Avg = _AVG[4]
        }
        else if (input == ina236Avg.Five) {
            Avg = _AVG[5]
        }
        else if (input == ina236Avg.Six) {
            Avg = _AVG[6]
        }
        else if (input == ina236Avg.Seven) {
            Avg = _AVG[7]
        }
    }

    /**
     * Set the ADC range of the INA236
     */
    //% blockId="INA236_ADC_RANGE" block="Set the ADC range to %ina236Adcrange"
    //% input.defl=ina236Adcrange.Zero
    //% color="#275C6B" weight=80 blockGap=8
    export function setADCRange(input: ina236Adcrange) {
        if (input == ina236Adcrange.Zero) {
            Adcrange = _ADCRANGE[0]
        }
        else if (input == ina236Adcrange.One) {
            Adcrange = _ADCRANGE[1]
        }
    }

    /**
     * Set the I2C Address of the INA236
     */
    //% blockId="INA236_I2C_ADDRESS" block="Set the I2C Address to %ina236AddressA"
    //% input.defl=ina236AddressA.Zero
    //% color="#275C6B" weight=75 blockGap=8
    export function setI2CAddress(input: ina236AddressA) {
        if (input == ina236AddressA.GND) {
            Address = _ADDRESS_A[0]
        }
        else if (input == ina236AddressA.VS) {
            Address = _ADDRESS_A[1]
        }
        else if (input == ina236AddressA.SDA) {
            Address = _ADDRESS_A[2]
        }
        else if (input == ina236AddressA.SCL) {
            Address = _ADDRESS_A[3]
        }
    }

    /**
     * Initialize the INA236 with the user specified parameters
     */
    //% blockId="INA236_INIT" block="Initialize the INA236"
    //% color="#275C6B" weight=70 blockGap=8
    export function init_ina236(): void {
        if (Adcrange == ADCRANGE_1) {
            Lsb = _LSB[0]
        }
        else {
            Lsb = _LSB[1]
        }

        let config = 0x0000
        config |= Mode
        config |= Vshct
        config |= Vbusct
        config |= Avg
        config |= Adcrange
        _write_register(Config_Reg, config)
    }

    /**
     * Reset the INA236 registers
     */
    //% blockId="INA236_RESET" block="Reset the INA236 at address %ina236AddressA"
    //% color="#275C6B" weight=65 blockGap=8
    export function reset_ina236(address: ina236AddressA) {
        if (address == ina236AddressA.GND) {
            Address = _ADDRESS_A[0]
        }
        else if (address == ina236AddressA.VS) {
            Address = _ADDRESS_A[1]
        }
        else if (address == ina236AddressA.SDA) {
            Address = _ADDRESS_A[2]
        }
        else if (address == ina236AddressA.SCL) {
            Address = _ADDRESS_A[3]
        }
        _write_register(Config_Reg, RST)
    }

    /**
     * Calibrate the INA236 for the correct Shunt measurement
     */
    //% blockId="INA236_CALIBRATE" block="Calibrate the INA236"
    //% color="#275C6B" weight=60 blockGap=8
    export function calibrate_ina236() {
        let current_lsb_min = 5 / (Math.pow(2, 15))
        Current_lsb = current_lsb_min + 0.0000074
        let SHUNT_CAL = 0.00512 / (Current_lsb * 0.016)
        SHUNT_CAL = Math.trunc(SHUNT_CAL)
        if (Adcrange == ADCRANGE_2) {
            SHUNT_CAL = SHUNT_CAL / 4
        }
        _write_register(Calibration_Reg, SHUNT_CAL)
    }

    /**
     * Read the current across the Shunt resistor
     */
    //% blockId="INA236_READ_CURRENT" block="Read the measured current"
    //% color="#275C6B" weight=55 blockGap=8
    export function read_current() {
        let CURRENT = _read_register(Current_Reg)
        return Math.roundWithPrecision((Current_lsb * CURRENT), 4)
    }

    /**
     * Read the power across the Shunt resistor
     */
    //% blockId="INA236_READ_POWER" block="Read the measured power"
    //% color="#275C6B" weight=50 blockGap=8
    export function read_power() {
        let POWER = _read_register(Power_Reg)
        return Math.roundWithPrecision(Math.abs((32 * Current_lsb * POWER)), 4)
    }

    /**
     * Read the voltage across the Shunt resistor
     */
    //% blockId="INA236_READ_SHUNT_VOLTAGE" block="Read the measured voltage across the Shunt resistor"
    //% color="#275C6B" weight=45 blockGap=8
    export function read_shunt_voltage() {
        let value_raw = _read_register(Shunt_Volt_Reg)
        let value_comp = ~value_raw
        let value = value_comp + 1
        return Math.roundWithPrecision(Math.abs(value * Lsb), 4)
    }

    /**
     * Read the bus voltage
     */
    //% blockId="INA236_READ_BUS_VOLTAGE" block="Read the bus voltage"
    //% color="#275C6B" weight=40 blockGap=8
    export function read_bus_voltage() {
        let value = _read_register(Bus_Volt_Reg)
        return Math.roundWithPrecision((value * _LSB[2]), 4)
    }

    /**
     * Set the alert register
     */
    //% blockId="INA236_MASK_ENABLE" block="Set the alert register to %ina236MaskEnable"
    //% val.defl=ina236MaskEnable.One
    //% color="#275C6B" weight=35 blockGap=8
    export function mask_enable(val: ina236MaskEnable) {
        let out: any
        if (val == ina236MaskEnable.Zero) {
            out = _MASK_ENABLE[0]
        }
        else if (val == ina236MaskEnable.One) {
            out = _MASK_ENABLE[1]
        }
        else if (val == ina236MaskEnable.Two) {
            out = _MASK_ENABLE[2]
        }
        else if (val == ina236MaskEnable.Three) {
            out = _MASK_ENABLE[3]
        }
        else if (val == ina236MaskEnable.Four) {
            out = _MASK_ENABLE[4]
        }
        else if (val == ina236MaskEnable.Five) {
            out = _MASK_ENABLE[5]
        }
        else if (val == ina236MaskEnable.Six) {
            out = _MASK_ENABLE[6]
        }
        else if (val == ina236MaskEnable.Seven) {
            out = _MASK_ENABLE[7]
        }
        else if (val == ina236MaskEnable.Eight) {
            out = _MASK_ENABLE[8]
        }
        _write_register(Mask_Enable_Reg, out)
    }

    /**
     * Write a value into the alert register as reference
     */
    //% blockId="INA236_WRITE_ALERT_VALUE" block="Write %val into the alert register"
    //% color="#275C6B" weight=30 blockGap=8
    export function write_alert_limit(val = 0x294) {
        _write_register(Alert_Limit_Reg, val)
    }

    /**
     * Read the value from the alert register
     */
    //% blockId="INA236_READ_ALERT_VALUE" block="Read from the alert register"
    //% color="#275C6B" weight=25 blockGap=8
    export function read_alert_limit() {
        let raw = _read_register(Alert_Limit_Reg)
        serial.writeString("Mask/Alert register value: ")
        serial.writeNumber(raw)
        serial.writeLine("")
    }

    /**
     * Read the Manufacturer ID
     */
    //% blockId="INA236_READ_MANUFACTURER_ID" block="Read the Manufacturer ID"
    //% color="#275C6B" weight=20 blockGap=8
    export function manufacturer_ID() {
        serial.writeString("Manufacturer ID: ")
        if (_read_register(Manufacturer_ID_Reg) == 21577) {
            serial.writeLine("TI")
            serial.writeLine("")
        }
        else {
            serial.writeLine("nan")
            serial.writeLine("")
        }
    }

    /**
     * Read the Device ID
     */
    //% blockId="INA236_READ_DEVICE_ID" block="Read the Device ID"
    //% color="#275C6B" weight=15 blockGap=8
    export function device_ID() {
        serial.writeString("Device ID: ")
        serial.writeNumber(_read_register(Device_ID_Reg))
        serial.writeLine("")
    }
}
