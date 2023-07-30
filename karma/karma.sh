#!/bin/bash

if [ -d "/home/coder/project/workspace/angularapp" ]
then
    echo "project folder present"
    cp /home/coder/project/workspace/karma/karma.conf.js /home/coder/project/workspace/angularapp/karma.conf.js;

    # checking for login component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/auth/login" ]
    then
        cp /home/coder/project/workspace/karma/login.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/auth/login/login.component.spec.ts;
    else
        echo "FE_loginTest FAILED";
    fi 

    # checking for signup component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/auth/signup" ]
    then
        cp /home/coder/project/workspace/karma/signup.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/auth/signup/signup.component.spec.ts;
    else
        echo "FE_signupTest FAILED";
    fi 


    # checking for adminhomepage component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/adminhomepage" ]
    then
        cp /home/coder/project/workspace/karma/adminhomepage.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/adminhomepage/adminhomepage.component.spec.ts;
    else
        echo "FE_adminHomepageTest FAILED";
    fi 



    # checking for adminreview component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/adminreview" ]
    then
        cp /home/coder/project/workspace/karma/adminreview.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/adminreview/adminreview.component.spec.ts;
    else
        echo "FE_adminReviewTest FAILED";
    fi


    # checking for customerapplyform component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/customerside/customerapplyform" ]
    then
        cp /home/coder/project/workspace/karma/customerapplyform.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/customerside/customerapplyform/customerapplyform.component.spec.ts;
    else
        echo "FE_customerApplyFormTest FAILED";
    fi 

    # checking for customerstatus component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/customerside/customerstatus" ]
    then
        cp /home/coder/project/workspace/karma/customerstatus.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/customerside/customerstatus/customerstatus.component.spec.ts;
    else
        echo "FE_customerStatusTest FAILED";
    fi 

    # checking for customerreview component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/customerside/customerreview" ]
    then
        cp /home/coder/project/workspace/karma/customerreview.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/customerside/customerreview/customerreview.component.spec.ts;
    else
        echo "FE_customerReviewTest FAILED";
    fi 

    cd /home/coder/project/workspace/angularapp/;
    npm test;
else   
        echo "FE_loginTest FAILED";
        echo "FE_signupTest FAILED";
        echo "FE_adminHomepageTest FAILED";
        echo "FE_adminReviewTest FAILED";
        echo "FE_customerApplyFormTest FAILED";
        echo "FE_customerStatusTest FAILED";
        echo "FE_customerReviewTest FAILED";
fi

