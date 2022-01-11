//
//  RNGreenLabelModule.swift
//  RNGreenLabelModule
//
//  Copyright © 2021 Manoj Rai. All rights reserved.
//

import Foundation

@objc(RNGreenLabelModule)
class RNGreenLabelModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
