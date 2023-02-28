const BASE_URL = "https://sandbox.myidentitypass.com/api/v2";

// DATA VERIFICATION
/**
 * Verify a vehicle plate number.
 * @param {string} vehicleNumber The vehicle's plate number.
 * @example await verifyPlateNumber('3Qm86XLflmIXVm1wcwkgDK', 'test_z4omamxleir113ppmje9me:NEM_Cz0XcDvlu5pe3yJFFxm4fKg', '2d37d309-3c29-4d60-93a0-dc175b6c12fe')
 * @returns {Promise|undefined} A promise that if successful, returns an object containing information
 *          about the vehicle.
 */

export const verifyPlateNumber = async (
  vehicle_number: string,
  x_api_key: string,
  app_id: string
) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "x-api-key": x_api_key,
      // "app-id": app_id,
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ vehicle_number }),
  };

  try {
    const res = await fetch(
      `${BASE_URL}/biometrics/merchant/data/verification/vehicle`,
      options
    );
    return await res.json();
  } catch (error) {
    return `verifyPlateNumber error: ${error}`;
  }
};

export const verifyNIN = () => {};
