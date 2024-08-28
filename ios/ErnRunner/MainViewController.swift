//
//  MainViewController.swift
//  ErnRunner
//
//  Created by Zafer ATLI on 6.01.2024.
//  Copyright © 2024 Walmart. All rights reserved.
//

import UIKit
import ElectrodeContainer

class MainViewController: UIViewController {
    
    var window: UIWindow?
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    @IBAction func btnPress(_ sender: Any) {
        let viewController = ElectrodeReactNative.sharedInstance().miniApp(withName: "ElectrodeassessmentappMiniapp", properties: [
            "initialScreen": "LandingLatestScreen"
          ], overlay: true, sizeFlexibility: 300, delegate: nil)
          let screenSize: CGRect = UIScreen.main.bounds
          viewController.view.frame = CGRect(x: 0, y: 0, width: screenSize.width, height: screenSize.height)
          self.view.addSubview(viewController.view)
    }
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
