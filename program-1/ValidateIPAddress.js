function isValidIPAddress(ipAddress) {
    const parts = ipAddress.split('.');
  
    if (parts.length !== 4) {
      return false;
    }
  
    for (const part of parts) {
      const value = parseInt(part, 10);
  
      if (isNaN(value) || value < 0 || value > 255) {
        return false;
      }
  
      if (value.toString() !== part) {
        return false;
      }
    }
  
    return true;
  }
  console.log(isValidIPAddress('255.255.0.0'));
    console.log(isValidIPAddress('555.555.555.555'));
    console.log(isValidIPAddress('256.255.0.0'));
    console.log(isValidIPAddress('233.33.33.33'));
    console.log(isValidIPAddress('24'));