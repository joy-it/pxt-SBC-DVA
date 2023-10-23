// Reset the INA236 before use at the given I2C Address
INA236.reset_ina236(ina236AddressA.GND)
// Set the Mode, Vshct, Vbusct, Avg, ADCRange and I2CAddress before initializing the INA236 chip
INA236.setMode(ina236Mode.Seven)
INA236.setVshct(ina236Vshct.Four)
INA236.setVbusct(ina236Vbusct.Four)
INA236.setAvg(ina236Avg.Zero)
INA236.setADCRange(ina236Adcrange.Zero)
INA236.setI2CAddress(ina236AddressA.GND)
INA236.init_ina236()
// Calibrate the INA236 to get accurate measurments across the shunt resistor
INA236.calibrate_ina236()
// Write into the mask/enable register what to pay attention to
INA236.mask_enable(ina236MaskEnable.One)
// Write a value into the mask/enable register that works as reference
INA236.write_alert_limit(660)
// Read the mask/enable register
INA236.read_alert_limit()
// Read the manufacturer ID of the INA236
INA236.manufacturer_ID()
// Read the device ID of the INA236 
INA236.device_ID()
basic.pause(5000)
// Continuous reading of current, power and voltage across the shunt resistor as well as voltage across the bus
basic.forever(function () {
    serial.writeString("Current [A]: ")
    serial.writeLine("" + (INA236.read_current()))
    serial.writeString("Power [W]: ")
    serial.writeLine("" + (INA236.read_power()))
    serial.writeString("Shunt [V]: ")
    serial.writeLine("" + (INA236.read_shunt_voltage()))
    serial.writeString("Bus [V]: ")
    serial.writeLine("" + (INA236.read_bus_voltage()))
    serial.writeLine("---------------------------------------")
    basic.pause(1000)
})
