"""typescript
L'erreur que vous obtenez indique que TypeScript ne parvient pas à déduire correctement le type pour votre tableau todos lorsque vous l'initialisez avec une liste vide. Pour résoudre cette erreur, vous devez annoter le type du tableau todos explicitement. Vous pouvez faire cela en créant une interface ou en utilisant un type pour définir la structure des éléments du tableau.
Impossible d'assigner le type '{ id: `${string}-${string}-${string}-${string}-${string}`; title: string; compeled: false; }' au type 'never'.ts        // importation de useState
import { ChangeEvent, PointerEventHandler, useState } from "react"
import "./style.css"

L'expression useState<TodoItem[]>([]) que vous avez utilisée dans votre code est une utilisation des génériques en TypeScript. Les génériques permettent de paramétrer le type d'une fonction, d'une classe ou d'une structure de données afin de rendre votre code plus flexible et réutilisable. Dans le cas de useState, cela permet de spécifier le type de données que vous prévoyez de stocker dans l'état local.
"""
Voici comment cela fonctionne :

useState : useState est une fonction hook de React qui permet de gérer l'état local dans un composant fonctionnel. Elle renvoie un tableau avec deux éléments : la valeur actuelle de l'état et une fonction pour mettre à jour cet état.

<TodoItem[]> : C'est une utilisation de génériques pour spécifier le type de données que vous prévoyez de stocker dans l'état. Dans ce cas, vous avez utilisé <TodoItem[]> pour indiquer que vous souhaitez stocker un tableau d'objets de type TodoItem.

([]) : C'est la valeur initiale de l'état. Dans votre exemple, vous initialisez l'état avec un tableau vide []. Cela signifie que todos sera initialement un tableau vide de type TodoItem[].

En résumé, l'utilisation de useState<TodoItem[]>([]) permet de créer un état local todos qui sera un tableau vide de type TodoItem[]. Cela permet à TypeScript de connaître le type attendu de todos, ce qui peut aider à détecter les erreurs de typage potentielles lors de l'utilisation de cet état, notamment lorsque vous ajoutez ou modifiez des éléments dans le tableau. Cela améliore la sécurité et la lisibilité du code TypeScript, en fournissant une documentation plus précise sur le type de données attendu.


## bug-2
Impossible d'assigner le type '(e: ChangeEvent<HTMLInputElement>) => void' au type 'FormEventHandler<HTMLFormElement>'.
  Les types des paramètres 'e' et 'event' sont incompatibles.
    Impossible d'assigner le type 'FormEvent<HTMLFormElement>' au type 'ChangeEvent<HTMLInputElement>'.
      Les types de la propriété 'target' sont incompatibles.
        Impossible d'assigner le type 'EventTarget' au type 'EventTarget & HTMLInputElement'.
          Le type 'EventTarget' n'a pas les propriétés suivantes du type 'HTMLInputElement': accept, align, alt, autocomplete et de 346 autres.ts(2322)
index.d.ts(1504, 9): Le type attendu provient de la propriété 'onSubmit', qui est déclarée ici sur le type 'DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>'
(property) React.DOMAttributes<HTMLFormElement>.onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined
L'erreur que vous avez rencontrée se produit lorsque vous essayez d'attribuer une fonction de gestionnaire d'événements onChange à un gestionnaire d'événements onSubmit dans un formulaire. Les types des paramètres de ces gestionnaires d'événements sont différents, d'où l'erreur.

Le gestionnaire d'événements onChange prend un paramètre de type ChangeEvent<HTMLInputElement>, tandis que le gestionnaire d'événements onSubmit attend un paramètre de type FormEvent<HTMLFormElement>.

Pour résoudre cette erreur, vous devez vous assurer que la fonction que vous attribuez à onSubmit correspond au type attendu. Vous pouvez utiliser la fonction e.preventDefault() dans le gestionnaire onSubmit pour empêcher le comportement par défaut du formulaire. Voici comment vous pouvez le faire 
nous avons supprimé carrément le type changeEvent que j'avais mis