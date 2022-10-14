import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BotConfigServiceService } from '../bot-config-service.service';

@Component({
  selector: 'app-add-config',
  templateUrl: './add-config.component.html',
  styleUrls: ['./add-config.component.css'],
})
export class AddConfigComponent implements OnInit {
  botForm: any;
  patternValue: any = [];
  responseValue: any = [];
  editForm: boolean = false;
  applicationName: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private service: BotConfigServiceService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      if (data['id']) {
        this.editForm = true;
        this.applicationName = data['id'];
      }
    });

    if (this.editForm) {
      this.service.getSpecificConfig(this.applicationName).subscribe((data) => {
        let tempData = JSON.parse(JSON.stringify(data));
        this.botForm = this.formBuilder.group({
          applicationName: [
            { value: tempData.applicationName, disabled: true },
          ],
          tag: [{ value: tempData.intents[0].tag, disabled: true }],
          pattern: [undefined],
          responseText: [],
          helpLink: [],
          apiComputeUrlAndHelpLink: [],
        });
        this.patternValue = tempData.intents[0].patterns;
        this.responseValue = tempData.intents[0].responses;
      });
    } else {
      this.botForm = this.formBuilder.group({
        applicationName: [undefined],
        tag: [undefined],
        pattern: [undefined],
        responseText: [],
        helpLink: [],
        apiComputeUrlAndHelpLink: [],
      });
    }
  }

  get f() {
    return this.botForm.controls;
  }

  updateValuePatternValue() {
    this.patternValue.unshift(this.f.pattern.value);
    this.botForm.controls['pattern'].setValue('');
  }

  updateValueResponseValue() {
    let constructResponse = {
      responseText: this.f.responseText.value,
      helpLink: this.f.helpLink.value,
      apiComputeUrlAndHelpLink: this.f.apiComputeUrlAndHelpLink.value,
    };
    this.responseValue.unshift(constructResponse);
    this.botForm.controls['responseText'].setValue('');
    this.botForm.controls['helpLink'].setValue('');
    this.botForm.controls['apiComputeUrlAndHelpLink'].setValue('');
  }

  clearValue(type: string) {
    if (type === 'pattern') {
      this.patternValue = [];
    } else {
      this.responseValue = [];
    }
  }

  clearForm() {
    this.botForm.reset();
    this.clearValue('pattern');
    this.clearValue('response');
  }

  submitForm() {
    let postObj = {
      applicationName: this.f.applicationName.value,
      intents: [
        {
          tag: this.f.tag.value,
          patterns: this.patternValue,
          responses: this.responseValue,
        },
      ],
    };
    console.log(postObj);
    this.service.saveConfig(postObj).subscribe((data) => {
      console.log(data);
      alert('success');
      this.backTolist();
    });
  }

  backTolist() {
    this.route.navigateByUrl('list');
  }
}
