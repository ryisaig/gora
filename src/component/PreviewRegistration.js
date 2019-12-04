import React from 'react';
import * as Color from '../constant/Color';
import SpecializationTransferList from '../component/SpecializationTransferList';
import { TextField, InputLabel} from '@material-ui/core';
import { SelectBox } from './SelectBox';
import CompanyBasicInfoForm from '../component/CompanyBasicInfoForm';
import DocumentAttachmentsForm from '../component/DocumentAttachmentsForm';
import AddressAndContactInfoForm from '../component/AddressAndContactInfoForm';
import BankDetailsForm from '../component/BankDetailsForm';

const PreviewRegistration = (props) => {

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              {/* <CompanyBasicInfoForm textFieldStyle={props.textFieldStyle}/>;
              <DocumentAttachmentsForm textFieldStyle={props.textFieldStyle}/>;
              <AddressAndContactInfoForm textFieldStyle={props.textFieldStyle}/>;
              <BankDetailsForm textFieldStyle={props.textFieldStyle}/>; */}
        </div>
    )
}

export default PreviewRegistration;