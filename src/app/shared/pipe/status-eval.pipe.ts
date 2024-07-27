import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusEval'
})
export class StatusEvalPipe implements PipeTransform {

  private statusTranslations: { [key: string]: string } = {
    AWAITING_DEVELOPER_INPUT: 'En attente de contribution du développeur',
    DEVELOPER_INPUT_COMPLETED: 'Contribution du développeur terminée',

    // Statuts pour le manager
    AWAITING_MANAGER_VALIDATION: 'En attente de validation du manager',
    VALIDATED_BY_MANAGER: 'Validé par le manager',

    // Statuts pour le RH
    AWAITING_HR_APPROVAL: 'En attente d\'approbation des RH',
    COMPLETED: 'Terminé',
    ABANDONED: 'Abandonné'
  };

  transform(value: string, ...args: unknown[]): string {
    return this.statusTranslations[value] || value; // Retourne la traduction ou la valeur d'origine si non trouvée
  }

}