export enum PlaceTypes {
  MARKET = 'chợ',
  PARK = 'công viên',
  COLLEGE = 'cao đẳng',
  HOSPITAL = 'bệnh viện',
  UNIVERSITY = 'đại học',
  SUPERMARKET = 'siêu thị',
  STORE = 'cửa hàng tiện lợi',
  PRESCHOOL = 'trường mầm non',
  HIGH_SCHOOL_SHORT = 'trường thpt',
  GROCERY_STORE = 'cửa hàng tạp hoá',
  PRIMARY_SCHOOL = 'trường tiểu học',
  SECONDARY_SCHOOL_SHORT = 'trường thcs',
  HIGH_SCHOOL = 'trường trung phổ thông',
  CONVENIENCE_STORE = 'cửa hàng tiện lợi',
  SECONDARY_SCHOOL = 'trường trung học cơ sở',
}

export enum PlaceTypeColors {
  SHOPPING = '#F1C40F',
  EDUCATION = '#3498DB',
  PARK = '#2ECC71',
  HOSPITAL = '#9C88FF',
}

export enum APIServiceResponseMessages {
  SUCCESS = 'success',
  FAILED = 'failed',
}

export enum PlaceStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  DECLINED = 'declined',
}
