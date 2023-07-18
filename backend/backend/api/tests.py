from django.test import TestCase
from .models import Weapons, WeaponMod, WeaponModSlot

# Create your tests here.

class WeaponsModelTests(TestCase):
    # Testing creating a new weapon
    def setUp(self):
        weapon = Weapons.objects.create(
            name="Combat Axe",
            rulebook="CORE",
            type="BLADES",
            dv="5P",
            close=9,
            near=None,
            medium=None,
            far=None,
            extreme=None,
            availability=4,
            concealability=0,
            cost=500,
            ability="",
            wireless="",
            ranged=False
        )

        # Assertions to validate new weapon
        self.assertEqual(Weapons.objects.count(), 1),
        self.assertEqual(weapon.name, "Combat Axe"),
        self.assertEqual(weapon.type, "BLADES")

        # Delete new weapon
        weapon.delete()

class WeaponModTest(TestCase):
    def setUp(self):
        self.mod = WeaponMod.objects.create(
            name='Laser Sight',
            type='ACCESSORY',
            availability=1,
            cost=125,
            ability='',
            wireless='',
            rulebook='CORE'
        )
        self.mod1 = WeaponMod.objects.create(
            name='Internal Smartgun System',
            type='ACCESSORY',
            availability=1,
            cost=500,
            ability='This is the firearm or a projectile-weapon side of the smartlink system. The system includes a small camera and range finder. It keeps track of ammunition and, through DNI, allows switching between gun modes, ejecting a clip, and firing the gun without pulling the trigger. The camera allows you to fire from cover, suffering no Attack test penalties while affected by the Cover Status. If you’re using a smartlink, the smartgun system increases the gun’s Attack Rating by 2 across all available range categories. The smartgun features are accessed either by universal access port cable to an imaging device (like glasses, goggles, or a datajack for someone with cybereyes) or by a wireless connection working in concert with direct neural interface. Internal smartgun systems add 500 nuyen to the weapon price. An external smartgun system can be attached to the top mount or underbarrel mount with an Engineering + Logic (4, 1 hour) Extended Test. The small camera has a capacity of 1 and can be equipped with vision enhancements (p. 275).',
            wireless='You gain a +1 dice pool bonus. Gain a bonus Minor Action on a turn when you use the Reload Smartgun or Change Device Mode actions to eject a clip or change fire mode.',
            rulebook='CORE'
        )
    
    def test_mod_name(self):
        self.assertEqual(self.mod.name, 'Laser Sight')
        self.assertEqual(self.mod1.name, 'Internal Smartgun System')
    
    def test_mod_type(self):
        self.assertEqual(self.mod.type, 'ACCESSORY')
        self.assertEqual(self.mod1.type, 'ACCESSORY')

    def test_mod_availability(self):
        self.assertEqual(self.mod.availability, 1)
        self.assertEqual(self.mod1.availability, 1)

    def test_mod_cost(self):
        self.assertEqual(self.mod.cost, 125)
        self.assertEqual(self.mod1.cost, 500)

    def test_mod_ability(self):
        self.assertEqual(self.mod.ability, '')
        self.assertEqual(
            self.mod1.ability, 
            'This is the firearm or a projectile-weapon side of the smartlink system. The system includes a small camera and range finder. It keeps track of ammunition and, through DNI, allows switching between gun modes, ejecting a clip, and firing the gun without pulling the trigger. The camera allows you to fire from cover, suffering no Attack test penalties while affected by the Cover Status. If you’re using a smartlink, the smartgun system increases the gun’s Attack Rating by 2 across all available range categories. The smartgun features are accessed either by universal access port cable to an imaging device (like glasses, goggles, or a datajack for someone with cybereyes) or by a wireless connection working in concert with direct neural interface. Internal smartgun systems add 500 nuyen to the weapon price. An external smartgun system can be attached to the top mount or underbarrel mount with an Engineering + Logic (4, 1 hour) Extended Test. The small camera has a capacity of 1 and can be equipped with vision enhancements (p. 275).',
        )

    def test_mod_wireless(self):
        self.assertEqual(self.mod.wireless, '')
        self.assertEqual(
            self.mod1.wireless, 
            'You gain a +1 dice pool bonus. Gain a bonus Minor Action on a turn when you use the Reload Smartgun or Change Device Mode actions to eject a clip or change fire mode.'
        )

    def test_mod_rulebook(self):
        self.assertEqual(self.mod.rulebook, 'CORE')
        self.assertEqual(self.mod1.rulebook, 'CORE')

class WeaponModSlotTest(TestCase):
    def setUp(self):
        self.weapons = Weapons.objects.create(
            name="Combat Axe",
            rulebook="Core Rulebook",
            type="Blades",
            dv="5P",
            close=9,
            near=None,
            medium=None,
            far=None,
            extreme=None,
            availability=4,
            concealability=0,
            cost=500,
            ability="",
            wireless="",
            ranged=False
        )
        self.mod = WeaponMod.objects.create(
            name='Laser Sight',
            type='ACCESSORY',
            availability=1,
            cost=125,
            ability='',
            wireless='',
            rulebook='CORE'
        )
        self.slot1 = WeaponModSlot.objects.create(
            weapon=self.weapons,
            mod=self.mod,
            slot='Top'
        )
        self.slot2 = WeaponModSlot.objects.create(
            weapon=self.weapons,
            mod=self.mod,
            slot='Under'
        )
    
    def test_slot_choices(self):
        slot_choices = [self.slot1.slot, self.slot2.slot]
        expected_choices = ['Top', 'Under']
        self.assertEqual(slot_choices, expected_choices)