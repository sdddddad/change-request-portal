
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Wrench, Users, Cog, TrendingUp, DollarSign, FolderOpen, Lock, Clock, UserCheck, ArrowLeft, ExternalLink, Car } from 'lucide-react';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import { toast } from '@/hooks/use-toast';

const ProcessDocuments = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedSubSection, setSelectedSubSection] = useState<string | null>(null);
  const [showAccessDialog, setShowAccessDialog] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<string>('');
  const [accessStatus, setAccessStatus] = useState<'request' | 'pending'>('request');

  const documentData = {
    repairs: {
      workshop: {
        repairs: [
          { name: 'Appointment Process', level: 'L3', docNo: 'EFPL-WOP-SAP-L3-1.0', link: 'https://docs.google.com/document/d/1yS6TaHjNZS-dOiPHHNiQeEvIaYHV3-8A95epVURxeco/edit?usp=sharing' },
          { name: 'Vehicle Inward Process', level: 'L3', docNo: 'EFPL-WOP-VIP-L3-1.0', link: 'https://docs.google.com/document/d/1WhsTcJaFbQWGhGV1g-z7-X7IvSC6Zz-dt45PLI4tOH8/edit?usp=sharing' },
          { name: 'Pre Repair Inspection Process', level: 'L3', docNo: 'EFPL-WOP-PRI-L3-1.0', link: 'https://docs.google.com/document/d/17tgFHWmQnOb-iQ8vqgdREC8OfHgPg-L4eurZdlX8qRo/edit?usp=sharing' },
          { name: 'Repair Process', level: 'L3', docNo: 'EFPL-WOP-RP-L3-1.0', link: 'https://docs.google.com/document/d/1HCuFnAdQnix_60mnSG6vrBWvgy2D36t6ZgENG2P7_Tg/edit?usp=sharing' },
          { name: 'Vendor Repairing Process', level: 'L3', docNo: 'EFPL-WOP-VRP-L3-1.0', link: 'https://docs.google.com/document/d/1Y7Kkww6RGt6R_xXigE3FBSQ5mQeHoDG0fuxL4aEjf4I/edit?usp=sharing' },
          { name: 'Post Repair Inspection Process', level: 'L3', docNo: 'EFPL-WOP-PRP-L3-1.0', link: 'https://docs.google.com/document/d/1KAAUQ5A7Cn3zQhM-7sASm981Ew3-HAFh-cgadCpBWDs/edit?usp=sharing' },
          { name: 'Job Closure And Handover Process', level: 'L3', docNo: 'EFPL-WOP-JCP-L3-1.0', link: 'https://docs.google.com/document/d/1gwQubI2jb4DULP_dK4RF6U7mdfoKXS0ixzaSNhL15do/edit?usp=sharing' },
          { name: 'Breakdown Process', level: 'L3', docNo: 'EFPL-WOP-BDP-L3-1.0', link: 'https://docs.google.com/document/d/17XDBZFvI3oTTCy76B1I-ErPtp1ogXD8B5biJkR-rrmo/edit?usp=sharing' },
          { name: 'Petrol Consumption Process (Proposed)', level: 'L3', docNo: 'EFPL-WOP-PCP-L3-1.0', link: 'https://docs.google.com/document/d/1YaRslEda4ryGLprjlf7j6r5bQ7SP8d4J60XaCfyuT04/edit?usp=sharing' },
          { name: 'Bill Approval Process - Vendor, Towing / RSA', level: 'L3', docNo: 'EFPL-WOP-BAP-L3-1.0', link: 'https://docs.google.com/document/d/17Y6I2I6vAtMIBeqb2J6fHO0731jdJD4iui86LRox6pk/edit?usp=sharing' },
          { name: 'Reconciliation Process - Petrol', level: 'L3', docNo: 'EFPL-WOP-RPP-L3-1.0', link: 'https://docs.google.com/document/d/1_mOQ5qeq5lqB0O-w3oj7Qg2w-XnFzxrkqkVPe64HYPQ/edit?usp=sharing' },
          { name: 'Petrol Procurement Process (Proposed)', level: 'L3', docNo: 'EFPL-WOP-PPP-L3-1.0', link: 'https://docs.google.com/document/d/1Avg_ZSa5IcOVu0WhTyWSPN9OR86Si-RWmUmrgOk7Yi0/edit?usp=sharing' },
          { name: 'Workshop Tools and Equipment Procurement process', level: 'L3', docNo: 'N/A', link: 'https://docs.google.com/document/d/1Irk4h7NEF0W8VNKYQ9j0yYxKyrHiU_0yjxWTiIw2tjo/edit?usp=sharing' },
          { name: 'Workshop Tools and Equipment Inventory process', level: 'L3', docNo: 'N/A', link: 'https://docs.google.com/document/d/1Um5yCwod16eXImkIag8-JgODebkl5YBHyjIrMEfC2C4/edit?usp=sharing' },
          { name: 'Repair and Maintenance of Workshop Tools and Equipment', level: 'L3', docNo: 'N/A', link: 'https://docs.google.com/document/d/1GK92Di1qDqWhoiP3Y8Bwx9Fb8wtRKYllccUld-aK7zc/edit?usp=sharing' }
        ],
        spares: [
          { name: 'Spare Parts issue and consumption Process', level: 'L3', docNo: 'EFPL- WOP-SPI-L3-1.0', link: 'https://docs.google.com/document/d/1Zh2eXPe5fnvACnjQ_5GnCn762mzbF9fyUH6b3C9xp4Y/edit?usp=sharing' },
          { name: 'Spares Parts Threshold for Ordering Process', level: 'L3', docNo: 'EFPL-WOP-SPR-L3-1.0', link: 'https://docs.google.com/document/d/1rUHO8gqdY4Tb81sJYyiy1pz3wzIPzn4zdkjzL_MKnQo/edit?usp=sharing' },
          { name: 'Spares Parts Ordering Process', level: 'L3', docNo: 'EFPL-WOP-SPO-L3-1.0', link: 'https://docs.google.com/document/d/1tTRBnkSTeb71VTM6A8t57pYb6rXO6coolr2AYvrTIJg/edit?usp=sharing' },
          { name: 'Spares Part GRN Process', level: 'L3', docNo: 'EFPL-WOP-SPG-L3-1.0', link: 'https://docs.google.com/document/d/1i0Lo3WMJCiILT6TmKo49FYMF-__l6pJnOATSgR76VAs/edit?usp=sharing' },
          { name: 'Inter Store Stock Transfer', level: 'L3', docNo: 'EFPL-WOP-IST-L3-1.0', link: 'https://docs.google.com/document/d/1mgDn_7Mhy3zIVIOuO8TZzazLhy-qMkoMNv_ZADyOdCw/edit?usp=sharing' },
          { name: 'Bill Approval Process - Spare parts Vendor', level: 'L3', docNo: 'EFPL-WOP-BAP-L3-1.0', link: 'https://docs.google.com/document/d/1gJwr4B_m8iPsldrMsejg_F9Q8NsPUfuE8FyJ7AlPsjU/edit?usp=sharing' },
          { name: 'Old Parts Inward Exchange - Refurb / Warranty', level: 'L3', docNo: 'EFPL-WOP-SPG-L3-1.0', link: 'https://docs.google.com/document/d/1V3GNFVoPGUP6WsajCuvPtY5EURhgbNbXso-5nEP-ulQ/edit?usp=sharing' },
          { name: 'Spare Parts audit and Reconciliation Process (External)', level: 'L3', docNo: 'EFPL-WOP-SPR-L3-1.0', link: 'https://docs.google.com/document/d/1mMlt2V0TjZ7rWDPuifN48JbqoCEIYOnu45H-eaizv4k/edit?usp=sharing' },
          { name: 'Spare Parts audit and Reconciliation Process (Internal)', level: 'L3', docNo: 'N/A', link: 'https://docs.google.com/document/d/1LGS73CVer3aT2lLHGRV0At4kf0YQFB1v2RfG24lO-sI/edit?usp=sharing' },
          { name: 'Scraps Sale Process', level: 'L3', docNo: 'EFPL-WOP-SSP-L3-1.0', link: 'https://docs.google.com/document/d/1TpyVyAtz6iy9n3BhG_gQXpeO3tERLbNaev-eLCT3VJ0/edit?usp=sharing' }
        ]
      }
    },
    recruitment: [
      { name: 'Campaign Set-Up', level: 'L3', docNo: '', link: 'https://docs.google.com/document/u/0/d/1awncGOWff_26M22uN6ZJgKNyKSnGt8t34uwHMDOfmr8/edit' },
      { name: 'Campaign Activation Process', level: 'L3', docNo: '', link: 'https://docs.google.com/document/u/0/d/1vWhWBQZVOuqtbKXsTOxOvFkcuzqByA4PIJN6WfuRvPU/edit' },
      { name: 'Lead Attempt Prioritization', level: 'L3', docNo: '', link: 'https://docs.google.com/document/u/0/d/1ilAK_gznuwTkTWt6tzcnNvHAqH2K6LGhOPpuWi7J9lU/edit' },
      { name: 'Multi- Campaigns - to TC Setup Process + IB vs OB Prioritization & Telecaller Prioritization', level: 'L3', docNo: '', link: 'https://docs.google.com/document/d/1sMWQgCnYR_PjSZaBaoq98SeKN_mkBBIpmwNEzWrkjsw/edit?tab=t.0#heading=h.q3bw3w280jq' },
      { name: 'Predictive Calling Process (Outbound)', level: 'L3', docNo: '', link: 'https://docs.google.com/document/d/18iZc5UAFpt9vNMT6wrW3Z_32xJ3pYgOKoNnRW4eG_l8/edit?tab=t.0' },
      { name: 'Calling & Pitch - "Calling"', level: 'L3', docNo: '', link: 'https://docs.google.com/document/d/1KWRdso8RKe8ezfoHCBh0e-pg8wI_GzabE5bYj8HB0lg/edit?usp=sharing' },
      { name: 'Interested Lead Follow Up Process', level: 'L3', docNo: '', link: 'https://docs.google.com/document/d/13NSJ16qaci0aML7AqVUDqfyKxdxFOvjfvPts8cMcB7Q/edit?usp=sharing' },
      { name: 'Scheduled Lead Follow Up Process', level: 'L3', docNo: '', link: 'https://docs.google.com/document/d/1tkw3S850IH8sFnk0TZ7n0P8sfDTSx4ejQ7P0Bz__9Qs/edit?usp=sharing' },
      { name: 'Walk-In Lead Follow Up Process', level: 'L3', docNo: '', link: 'https://docs.google.com/document/d/1g7MJh4pgtoe3qs3gzLiHVUPQ7iHPfQx5lvJo47L0QNE/edit?usp=sharing' }
    ],
    operations: {
      evProcess: [
        { name: 'Car Readiness -EV', level: 'L3', docNo: 'EFPL-FOP-EVCR-L3-1.0', link: 'https://docs.google.com/document/d/1hife0ekk4fvgk8WWPpRGoAkVFnv5wMjameNOCLYKiOc/edit?usp=sharing' },
        { name: 'Car CheckIn Process -EV', level: 'L3', docNo: 'EFPL-FOP-EVCI-L3-1.0', link: 'https://docs.google.com/document/d/1ov0PpPstd1g0WPOYibP1ZFYroX30nVoqlX0zOtDCvBM/edit?usp=sharing' },
        { name: 'EV Audit Process', level: 'L3', docNo: 'EFPL-FOP-ECA-L3- 1.0', link: 'https://docs.google.com/document/d/1HVju0RsHkueGC2h9KjlxOIxCU4pZQ7L_pqdmWj9A32k/edit?usp=sharing' },
        { name: 'Car Allocation-EV', level: 'L3', docNo: 'EFPL-FOP-CAP-L3-1.0', link: 'https://docs.google.com/document/d/1FIyTSf55fPtIszYHm_MwhCjFU1Mvnf3N2CQbcPzlYao/edit?usp=sharing' },
        { name: 'Driver Readiness', level: 'L3', docNo: 'EFPL-FOP-EVDR-L3-1.0', link: 'https://docs.google.com/document/d/1VTwXFr0ZTB2CXCl5OAYQ_L_7F3RSXdC0VPjgWpIzBcY/edit?usp=sharing' },
        { name: 'CAR Charging -EV', level: 'L3', docNo: 'EFPL-FOP-ECC-L3-1.0', link: 'https://docs.google.com/document/d/1dWsHoaK1ypz25CN7Tbr1SnHWwj7sRBN-sQdEZgenAyU/edit?usp=sharing' },
        { name: 'Vehicle Check out -EV', level: 'L3', docNo: 'EFPL-FOP-CAP-L3-1.0', link: 'https://docs.google.com/document/d/1LrQLtwbRjrkB5JSNYs7aWgtpv1rafvmBQpYsdHUptfk/edit?usp=sharing' },
        { name: 'Car Drop Off Process -EV', level: 'L3', docNo: 'EFPL-FOP-EVCI-L3-1.0', link: 'https://docs.google.com/document/d/1Sc7v18_guSrgwimh51xI_zYXC5VJs-W0_C5XCUhLP2A/edit?usp=sharing' },
        { name: 'Driver_Performance_Monitoring', level: 'L3', docNo: 'EFPL-FOP-DRM-L3-1.0', link: 'https://docs.google.com/document/d/1Rj117H70tAcMc03LZIBQtpKhht-eOzNo47StCKfXof0/edit?usp=sharing' },
        { name: 'Nerve Centre Ticket Count Optimisation Process', level: 'L3', docNo: 'EFPL-FOP-NTR-L3-1.0', link: 'https://docs.google.com/document/d/1K-gXD9ENHuGFhRC8b-PFfVrTwg8rG8HItO3wS7ZPlOo/edit?usp=sharing' }
      ]
    },
    hr: [
      { name: 'Code of conduct', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=17QZl1-SUo4JTnDivmTwpdLZZTzMYcQM3' },
      { name: 'Leave Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1Y7caD2mrlidtHK22ywcVuSIg_eAs3hgv' },
      { name: 'Joining & Probation Guideline', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1t_OvJbV1v2BbMKeHsObq_DWD5dx8XSIA' },
      { name: 'Working Hour Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1h2EyucCBWdnbE2vO2PxwZJhVrCvLBF-u' },
      { name: 'Exit Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1qojDo1hVA2jBZ43-a26JRe0ott42biyE' },
      { name: 'Payroll and Attendance Guideline', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1N42wuno9j1MOxFm5Q0W6T4oZWKS5h1h0' },
      { name: 'Performance Improvement Plan', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1v9RM815dfPCQM99yl1-6BKFyRRBNfmHI' },
      { name: 'Work From Home Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1PJKBJM76n2mwtiLNvfwGLnNHZbKVvgp2' },
      { name: 'Performance Assessment & Appraisal Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1akS0LPNJHHBJ_qcinaWTt1WNBVa6LRjq' },
      { name: 'Employee Referral Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=11TwFOFm0u-Me1skQQfRq1AaKIJ6RhD10' },
      { name: 'Discretionary Spends Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1TcotMoxj8W1SWbiOn7tokGmMM0Mmhh-Z' },
      { name: 'Employee Rewards and Recognition Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1XRsF14wTp-PAQk_uuKsiIlyqRsQmHxm_' },
      { name: 'Salary Advance Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1zC6jSgDz3Xg0JUY_1LuBiI1HPMpW9Q_j' },
      { name: 'Travel Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1bHBAfN-8P5g-i5dSRfM65alqekYipcSj' },
      { name: 'Prevention Of Sexual Harassment- POSh- 1.4', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1bC24s-msOyir1YqQ_ELyR4-8HgVMRRgc' },
      { name: 'Disciplinary Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1I4AIIZc6zZzu-zdOcaSXCf6nUdNgPRlF' },
      { name: 'Diversity and Inclusion', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1Uy8ngwbT3ghtJ3w7I-1nG9SiNf90ti0x' },
      { name: 'Asset Management Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1JHYAH_1BwQYOqd0y4egoU4efUcLTVU-I' },
      { name: 'Anti Bribery & Anti-Corruption Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1rH1W8Jbr_V5M1hEjXPDkjsoCF28NKL3T' },
      { name: 'Data security and Privacy Policy', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=13AT95H4ffD5HCOVpUIoozfiP1C7MA4b6' },
      { name: 'Grievance Redressal Policy for Employees', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1j1lPv_ELGGOp_wsgMKUgB6bb6sUiVSVZ' },
      { name: 'WHISTLE BLOWER POLICY', level: 'L0', docNo: '', link: 'https://drive.google.com/open?id=1QJ8KX2MsGcOz2SARqAbQ6fUudOhIOKnM' }
    ],
    excellence: [
      { name: 'Internal Audit Process', level: 'L3', docNo: 'EFPL-PEX-IAP-L3-1.0', link: 'https://docs.google.com/document/d/1wstxFLwQnhB-KBx-VAQpB3wnFHuQknojv5PYPYZslPw/edit?usp=sharing' },
      { name: 'Skill Matrix', level: 'L4', docNo: 'EFPL-PEX-SKM-L4-1.0', link: 'https://docs.google.com/spreadsheets/d/14SlAN9KaCUTl0pVD3oCP-1s_4ZGGcQnsMxizW7HJzs0/edit?usp=drive_link' },
      { name: 'Change Management', level: 'L4', docNo: 'EFPL-QMS-CMM-L4-1.0', link: 'https://docs.google.com/spreadsheets/d/1RAWCY4qPxScflYlHRYdTcCNp1CyXKDrOgAzf9qf0hJ0/edit?usp=sharing' },
      { name: 'Change Management', level: 'L2', docNo: 'EFPL-QMS-CHM-L2-1.0', link: 'https://docs.google.com/document/d/1s9l2hLjVmCave_QJ_p8lk5fwOnhJ50WDtG0cC2AHH34/edit?usp=sharing' },
      { name: 'Control of Documented Information', level: 'L1', docNo: 'EFPL-QMS-CDI-L1-1.0', link: 'https://docs.google.com/document/d/1YjKzY6TMegrRK7M1Ni58nIIqsh1YnBd23-zBpcati04/edit?usp=sharing' },
      { name: 'NC Tracker-2025', level: 'L4', docNo: 'EFPL-QMS-NCT-L4 -2.0', link: 'https://docs.google.com/spreadsheets/d/1_H5fUMCttY_ISlsDYgOxtbsj38xkSc1oa7KBvfoCiVQ/edit?usp=sharing' },
      { name: 'Risk Based Thinking', level: 'L2', docNo: 'EFPL-QMS-RBT-L2-01', link: 'https://docs.google.com/document/d/1IHXn7HelLR0vvb8H2TUBx2fz_jKStrAqo2ZBEwvBUBg/edit?usp=sharing' },
      { name: 'Risks _ Opportunities Register', level: 'L4', docNo: 'EFPL-RBT-ROR-L4-01', link: 'https://docs.google.com/spreadsheets/d/1scwCvwtrtnJqxP-tIRfMCV5i1cxYm3hl0urBigkJ8G4/edit?usp=sharing' },
      { name: 'Risks _ Incident Register', level: 'L4', docNo: 'EFPL-RBT-ROR-L4-01', link: 'https://docs.google.com/spreadsheets/d/1scwCvwtrtnJqxP-tIRfMCV5i1cxYm3hl0urBigkJ8G4/edit?usp=sharing' }
    ],
    finance: [
      { name: 'Finance Documents', level: 'N/A', docNo: '', link: '' }
    ],
    common: [
      { name: 'Company Policies', level: 'L0', docNo: '', link: '#' },
      { name: 'Employee Handbook', level: 'L0', docNo: '', link: '#' },
      { name: 'Code of Conduct', level: 'L0', docNo: '', link: '#' },
      { name: 'Emergency Procedures', level: 'L0', docNo: '', link: '#' }
    ]
  };

  const documentSections = [
    {
      id: 'repairs',
      title: 'Repairs & Maintenance',
      icon: Wrench,
      color: 'from-red-500 to-red-600',
      count: 0,
      hasSubSections: true
    },
    {
      id: 'recruitment',
      title: 'Recruitment',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      count: documentData.recruitment.length
    },
    {
      id: 'operations',
      title: 'Operations',
      icon: Cog,
      color: 'from-green-500 to-green-600',
      count: 0,
      hasSubSections: true
    },
    {
      id: 'hr',
      title: 'HR',
      icon: UserCheck,
      color: 'from-orange-500 to-orange-600',
      count: documentData.hr.length
    },
    {
      id: 'excellence',
      title: 'Process Excellence',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      count: documentData.excellence.length
    },
    {
      id: 'finance',
      title: 'Finance',
      icon: DollarSign,
      color: 'from-yellow-500 to-yellow-600',
      count: documentData.finance.length
    },
    {
      id: 'common',
      title: 'Common Documents',
      icon: FolderOpen,
      color: 'from-gray-500 to-gray-600',
      count: documentData.common.length
    }
  ];

  const handleSectionClick = (sectionId: string) => {
    if (sectionId === 'finance') {
      toast({
        title: "Coming Soon",
        description: "Finance documents will be added once approved"
      });
      return;
    }
    
    if (sectionId === 'repairs') {
      setSelectedSection(sectionId);
    } else if (sectionId === 'operations') {
      setSelectedSection(sectionId);
    } else {
      setSelectedSection(sectionId);
    }
  };

  const handleSubSectionClick = (subSectionId: string) => {
    setSelectedSubSection(subSectionId);
  };

  const handleDocumentClick = (document: any, sectionId: string) => {
    // Check if user has access (simulate access control)
    const hasAccess = sectionId === 'common' || sectionId === 'hr' || Math.random() > 0.3;
    
    if (hasAccess && document.link && document.link !== '#') {
      window.open(document.link, '_blank');
      toast({
        title: "Document Opened",
        description: `Opening ${document.name}...`
      });
    } else if (!document.link || document.link === '#' || document.link === '') {
      toast({
        title: "Document Not Available",
        description: "This document link is not yet available"
      });
    } else {
      setSelectedDocument(document.name);
      setAccessStatus('request');
      setShowAccessDialog(true);
    }
  };

  const handleAccessRequest = () => {
    setAccessStatus('pending');
    toast({
      title: "Access Requested",
      description: "Your access request has been submitted for approval"
    });
    setShowAccessDialog(false);
  };

  const getCurrentSection = () => {
    return documentSections.find(section => section.id === selectedSection);
  };

  const getCurrentDocuments = () => {
    if (selectedSection === 'repairs' && selectedSubSection) {
      return documentData.repairs.workshop[selectedSubSection as keyof typeof documentData.repairs.workshop] || [];
    } else if (selectedSection === 'operations' && selectedSubSection === 'evProcess') {
      return documentData.operations.evProcess || [];
    }
    return documentData[selectedSection as keyof typeof documentData] || [];
  };

  const getBreadcrumbItems = () => {
    const items = [
      {
        label: 'Process Documents',
        onClick: () => {
          setSelectedSection(null);
          setSelectedSubSection(null);
        }
      }
    ];

    if (selectedSection) {
      const currentSection = getCurrentSection();
      items.push({
        label: currentSection?.title || '',
        onClick: selectedSubSection ? () => setSelectedSubSection(null) : undefined
      });
    }

    if (selectedSubSection) {
      if (selectedSection === 'repairs') {
        items.push({
          label: 'Workshop',
          onClick: undefined
        });
        items.push({
          label: selectedSubSection === 'repairs' ? 'Repairs' : 'Spares',
          onClick: undefined
        });
      } else if (selectedSection === 'operations' && selectedSubSection === 'evProcess') {
        items.push({
          label: 'EV Process',
          onClick: undefined
        });
      }
    }

    return items;
  };

  // Show subsection selection for repairs
  if (selectedSection === 'repairs' && !selectedSubSection) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <Breadcrumb items={getBreadcrumbItems()} />
          
          <div className="mb-6 flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white">
              <Wrench className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Repairs & Maintenance</h1>
              <p className="text-gray-600">Select a workshop category</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <Card 
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
              onClick={() => handleSubSectionClick('repairs')}
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <Car className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    Workshop - Repairs
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {documentData.repairs.workshop.repairs.length} repair process documents
                </CardDescription>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
              onClick={() => handleSubSectionClick('spares')}
            >
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-600" />
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <Cog className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    Workshop - Spares
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {documentData.repairs.workshop.spares.length} spare parts process documents
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  // Show subsection selection for operations
  if (selectedSection === 'operations' && !selectedSubSection) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <Breadcrumb items={getBreadcrumbItems()} />
          
          <div className="mb-6 flex items-center space-x-3">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white">
              <Cog className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Operations</h1>
              <p className="text-gray-600">Select an operations category</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <Card 
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
              onClick={() => handleSubSectionClick('evProcess')}
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600" />
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <Car className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    EV Process
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {documentData.operations.evProcess.length} EV operation process documents
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  // Show documents list
  if (selectedSection && (selectedSubSection || !documentSections.find(s => s.id === selectedSection)?.hasSubSections)) {
    const currentSection = getCurrentSection();
    const documents = getCurrentDocuments();

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <Breadcrumb items={getBreadcrumbItems()} />

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center space-x-2">
                <Car className="h-5 w-5 text-blue-600" />
                <span>Document List</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700 w-2/5">Doc. Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700 w-1/6">Doc. Level</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700 w-1/4">Doc. No.</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700 w-1/6">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((document, index) => (
                      <tr 
                        key={index} 
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => handleDocumentClick(document, selectedSection)}
                      >
                        <td className="py-3 px-4 text-gray-800 text-sm leading-tight">
                          <div className="max-w-xs break-words">{document.name}</div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                            {document.level}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600 font-mono text-sm">{document.docNo || 'N/A'}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            {document.link && document.link !== '#' && document.link !== '' ? (
                              <ExternalLink className="h-4 w-4 text-blue-600" />
                            ) : (
                              <span className="text-gray-400 text-sm">No link</span>
                            )}
                            {selectedSection !== 'common' && selectedSection !== 'hr' && Math.random() > 0.7 && (
                              <Lock className="h-4 w-4 text-gray-400" />
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Access Request Dialog */}
        <Dialog open={showAccessDialog} onOpenChange={setShowAccessDialog}>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2">
                {accessStatus === 'request' ? (
                  <>
                    <Lock className="h-5 w-5 text-red-500" />
                    <span>Access Required</span>
                  </>
                ) : (
                  <>
                    <Clock className="h-5 w-5 text-yellow-500" />
                    <span>Waiting for Approval</span>
                  </>
                )}
              </DialogTitle>
              <DialogDescription>
                {accessStatus === 'request'
                  ? `You don't have access to "${selectedDocument}". Would you like to request access?`
                  : `Your request for access to "${selectedDocument}" is pending approval.`
                }
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setShowAccessDialog(false)}>
                Close
              </Button>
              {accessStatus === 'request' && (
                <Button onClick={handleAccessRequest} className="bg-blue-600 hover:bg-blue-700">
                  Request Access
                </Button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center space-x-3">
          <Car className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Process Documents</h1>
            <p className="text-gray-600">Access process documentation and procedures by category</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentSections.map((section) => (
            <Card 
              key={section.id}
              className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden group"
              onClick={() => handleSectionClick(section.id)}
            >
              <div className={`h-2 bg-gradient-to-r ${section.color}`} />
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {section.hasSubSections ? 'Multiple categories available' : `${section.count} documents available`}
                </CardDescription>
                {section.id === 'finance' && (
                  <p className="text-sm text-orange-600 mt-2 italic">
                    Documents will be added once approved
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProcessDocuments;
